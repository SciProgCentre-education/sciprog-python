import json

with open("test.json", "r") as fin:
    print(json.load(fin))