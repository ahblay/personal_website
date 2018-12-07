from pulp import *
from pprint import pprint as pp
from itertools import chain, product


class Scheduler:
    def __init__(self, prefs):
        self.prefs = prefs
        self.employees = ["Ann", "Lily", "Tim", "Jess", "Sara", "Jill", "Dan", "Kev"]
        self.roles = ["Barista", "Manager"]
        self.weekend_days = ["Saturday", "Sunday"]
        self.weekday_days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        self.weekend_shifts = [0, 1, 2]
        self.weekday_shifts = [0, 1]
        self.weekend_shift_need = [[3, 1], [2, 1], [1, 1]]
        self.weekday_shift_need = [[3, 1], [2, 1]]

        self.num_weekend_days = range(len(self.weekend_days))
        self.num_weekday_days = range(len(self.weekday_days))
        self.num_emps = range(len(self.employees))
        self.num_roles = range(len(self.roles))

    def build_schedule(self):
        weekday_matrix, weekend_matrix = self.build_variables()
        matrix = self.combine_vars(weekday_matrix, weekend_matrix)
        vars = self.get_variables_list(matrix)

        x = pulp.LpVariable.dicts('x', vars,
                                  lowBound=0,
                                  upBound=1,
                                  cat=pulp.LpInteger)

        # LP Model
        schedule_model = pulp.LpProblem("Schedule", pulp.LpMaximize)

        # Objective function
        # erds = employee role day shift combo
        objective = lpSum([self.coefficient(erds) * x[erds] for erds in vars])
        schedule_model += objective
        print(objective)

        # CONSTRAINTS
        # correct number of employees per shift on a weekend day
        for role, day, shift in self.product_range(self.num_roles, self.num_weekend_days, self.weekend_shifts):
            schedule_model += lpSum(x[weekend_matrix[shift][day][role][employee]] for employee in self.num_emps) \
                                        == self.weekend_shift_need[shift][role]

        # correct number of employees per shift on a weekday
        for role, day, shift in self.product_range(self.num_roles, self.num_weekday_days, self.weekday_shifts):
            schedule_model += lpSum(x[weekday_matrix[shift][day][role][employee]] for employee in self.num_emps) \
                              == self.weekday_shift_need[shift][role]

        # max number of shifts per week
        for employee in self.num_emps:
            weekday_max_shifts = lpSum(x[weekday_matrix[shift][day][role][employee]]
                                       for role, day, shift in self.product_range(self.num_roles,
                                                                                  self.num_weekday_days,
                                                                                  self.weekday_shifts))
            weekend_max_shifts = lpSum(x[weekend_matrix[shift][day][role][employee]]
                                       for role, day, shift in self.product_range(self.num_roles,
                                                                                  self.num_weekend_days,
                                                                                  self.weekend_shifts))
            # pp(weekday_max_shifts, weekend_max_shifts)
            schedule_model += (weekday_max_shifts + weekend_max_shifts) <= 7

        schedule_model.solve()
        status = LpStatus[schedule_model.status]

        #pp(schedule_model.constraints)
        #print(schedule_model.constraints)

        selected_erds = []
        for erds in vars:
            if x[erds].value() == 1.0:
                selected_erds.append(erds)

        schedule_dict = self.restructure_results(selected_erds)

        if status == "Infeasible":
            return status
        else:
            return schedule_dict

    def restructure_results(self, results):
        emp = 0
        role = 1
        day = 2
        shift = 3

        schedule_dict = {"Sunday": [
                                [],
                                [],
                                [],
                            ],
                         "Monday": [
                                [],
                                [],
                            ],
                         "Tuesday": [
                                [],
                                [],
                            ],
                         "Wednesday": [
                                [],
                                [],
                            ],
                         "Thursday": [
                                [],
                                [],
                            ],
                         "Friday": [
                                [],
                                [],
                            ],
                         "Saturday": [
                                [],
                                [],
                                [],
                            ],
                         }

        for result in results:
            d = result[day]
            s = result[shift]
            e = result[emp]
            r = result[role]

            schedule_dict[d][s].append([e, r])

        return schedule_dict

    def product_range(self, *args):
        return list(product(*args))

    def get_variables_list(self, matrix):
        # Flattens matrix into 1D list
        vars = list(chain.from_iterable(list(chain.from_iterable(list(chain.from_iterable(matrix))))))
        return vars

    def build_variables(self):
        weekend_vars = [[[[(emp, role, day, shift) for emp in self.employees]
                        for role in self.roles]
                        for day in self.weekend_days]
                        for shift in self.weekend_shifts]
        weekday_vars = [[[[(emp, role, day, shift) for emp in self.employees]
                        for role in self.roles]
                        for day in self.weekday_days]
                        for shift in self.weekday_shifts]
        return weekday_vars, weekend_vars

    def combine_vars(self, weekday_vars, weekend_vars):
        first_shift = weekday_vars[0] + weekend_vars[0]
        second_shift = weekday_vars[1] + weekend_vars[1]
        third_shift = weekend_vars[2]

        vars = [first_shift, second_shift, third_shift]

        return vars

    def coefficient(self, erds):
        emp = erds[0]
        role = erds[1]
        day = erds[2]
        shift = erds[3]

        if self.prefs[emp][day][shift] == "unselected":
            return 0
        elif self.prefs[emp][day][shift] == "unavailable":
            return -1000
        elif self.prefs[emp][day][shift] == "fine":
            return 1
        elif self.prefs[emp][day][shift] == "available":
            return 5
        else:
            return 0

