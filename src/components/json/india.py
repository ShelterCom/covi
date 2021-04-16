from urllib import urlopen as uReq
from bs4 import BeautifulSoup as soup
import csv, json
#import time

my_url = 'https://www.mohfw.gov.in/data/datanew.json'

#opening up connection, grabbing the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

#html parsing
page_soup = soup(page_html, "html.parser")
data = page_soup
print(type(data))
