from urllib import urlopen as uReq
from bs4 import BeautifulSoup as soup
import csv, json
import time

my_url = 'https://www.mohfw.gov.in/'

#opening up connection, grabbing the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

#html parsing
page_soup = soup(page_html, "html.parser")

print(page_soup.findAll('table'))

#grabs each row data
containers = page_soup.find("table")
divs = soup.findAll('table')
for container in containers:
    row = ''
    rows = [container.findAll('tr')]

#print(page_soup)

#print(containers)

filename = "cases.csv"
f = open(filename, "w")
header = "index,state,cases,recovered,dead\n"
f.write(header)

for i in range (1,36):
	lol = containers[i].findAll("td")
	index = str(i)
	state = lol[1].text
	cases = lol[2].text
	recovered = lol[3].text
	dead = lol[4].text
	f.write(index + "," + state + "," + cases + "," + recovered + "," + dead + "\n")

f.close()

csvfilepath = "cases.csv"
jsonfilepath = "indiadata.json"

# Read csv and add data to dictionary
data = []
with open(csvfilepath) as csvFile:
	csvReader = csv.DictReader(csvFile)
	for csvRow in csvReader:
		data.append(csvRow)

root = data

# Write data to JSON
with open(jsonfilepath, "w") as jsonFile:
	jsonFile.write(json.dumps(root, indent=4))
