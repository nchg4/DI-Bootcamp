import json
file_location = "data.json"

# Reading a json string
with open(file_location) as file:
    contents_str = file.read()
    contents_dict = json.loads(file.read())
    print(type(contents_str))

# Reading a json dict
with open(file_location) as file:
    contents_dict = json.load(file)
    print(contents_dict)
    print(type)

