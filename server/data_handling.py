import sys, json
import algorithm
from pprint import pprint as pp

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    data = read_in()

    scheduler = algorithm.Scheduler(data["prefs"])

    schedule = scheduler.build_schedule()

    print(schedule)

# Start process
if __name__ == '__main__':
    main()
