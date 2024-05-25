from selenium import webdriver
from selenium.webdriver.chrome.service import Service

web = "https://leetcode.com/problemset/?page=18"
path = "C:\Program Files (x86)\chromedriver.exe"

file = open("leetcode-scraper.txt", "a")

service = Service(executable_path = path)
driver = webdriver.Chrome(service = service)

driver.get(web)

problems = driver.find_elements(by = "xpath", value = "//div[contains(@class, 'odd:bg-layer-1')]")

for problem in problems:
    file.write("{\n")
    file.write("\t\"problemName\": " + "\"" + problem.find_element(by = "xpath", value = ".//a[contains(@class, 'h-5')]").text + "\",\n")
    file.write("\t\"difficulty\": " + "\"" + problem.find_element(by = "xpath", value = ".//div[contains(@style, 'flex: 84 0 auto')]").text + "\",\n")
    file.write("\t\"leetCodeLink\": " + "\"" + problem.find_element(by = "xpath", value = ".//a[contains(@class, 'h-5')]").get_attribute("href") + "\",\n")
    file.write("\t\"solutionLink\": \"#\"\n")
    file.write("},\n")

file.close()
driver.quit()