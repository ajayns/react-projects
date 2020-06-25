from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import csv, json

my_url='https://en.wikipedia.org/wiki/Template:2019%E2%80%9320_coronavirus_pandemic_data'

#opening up connection, grabbing the page
uClient = uReq(my_url)

page_html = uClient.read()

uClient.close()

#html parsing
page_soup = soup(page_html, "html.parser")

#grabs each row data
containers = page_soup.findAll("tr")

filename = "cases.csv"
f = open(filename, "w")
header = "index,country,cases,dead,recovered\n"
f.write(header)

for i in range (2,219):
	lol = containers[i].findAll("td")
	haha = containers[i].findAll("th")
	index = str(i-1)
	country = haha[1].a.text
	cases = lol[0].text.strip().replace(',','').replace(u'\u2009','')
	dead = lol[1].text.strip().replace(',','').replace(u'\u2009','')
	recovered = lol[2].text.strip().replace(',','').replace(u'\u2009','')
	f.write(index + "," + country + "," + cases + "," + dead + "," + recovered + "\n")

f.close()

csvfilepath = "cases.csv"
jsonfilepath = "worlddata.json"

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