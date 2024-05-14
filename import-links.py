import requests
from bs4 import BeautifulSoup

# The URL of the page where you want to collect links
url = 'https://www.anabaino.org/classes'

# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content of the page using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all <a> tags, assuming all links to classes are contained in these tags
    links = soup.find_all('a')

    # Print the href attribute of each <a> tag to get the URL
    for link in links:
        href = link.get('href')
        if href:  # Ensure href is not None
            print(href)
else:
    print("Failed to retrieve content: Status code", response.status_code)
