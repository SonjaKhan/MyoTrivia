import csv
import sys
import getopt
import json
import random

difficulties = ['easy', 'medium', 'hard']
gestures = ['fist', 'fingers_spread', 'wave_in', 'wave_out']

def read_csv(path):
    output = {}
    for row in csv.DictReader(open(path)):
    	category = row['zone_name']
    	difficulty = difficulties[int(row['difficulty']) - 1]
    	if category not in output:
    		output[category] = {}
    	if difficulty not in output[category]:
    		output[category][difficulty] = []
    	output[category][difficulty].append(format_question(row))
    return output


def format_question(row):
	'''
	Returns a dictionary with the questiontext, question answers w/ associated
	gestures, and the index of the correct answer
	'''
	output = {}
	output['questionText'] = row['question']
	answers = [row['Wrong answer1'], row['Wrong answer2'], row['Wrong answer3'], row['CORRECT']]
	answers = random.sample(answers, len(answers))
	output['answers'] = [ { 'text': answers[i], 'gesture': gestures[i]} for i in range(len(answers)) ]
	output['correctIndex'] = answers.index(row['CORRECT'])
	return output

def usage():
	print 'TriviaParser.py -i <inputfile> -o <outputfile>'

def main(argv):
	inputfile = ''
	outputfile = ''
	try:
		opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
	except getopt.GetoptError:
		usage()
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-h':
			usage()
			sys.exit()
		elif opt in ("-i", "--ifile"):
			inputfile = arg
		elif opt in ("-o", "--ofile"):
			outputfile = arg
	with open(outputfile, 'w') as outfile:
		json.dump(read_csv(inputfile), outfile, sort_keys=True, indent=4, separators=(',', ': '))

if __name__ == "__main__":
    # uncomment below to remove seed
    random.seed( 10 )
    if len(sys.argv) == 1:
    	usage()
    	sys.exit(2)
    main(sys.argv[1:])
    