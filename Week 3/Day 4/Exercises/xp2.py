import json
file_location = "data.json"

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


# Access the nested “salary” key from the JSON-string above.
json_data = json.loads(sampleJson)
salary_value = json_data['company']['employee']['payable']['salary']
print(f"The salary is: {salary_value}")

# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
json_data['company']['employee']['birth_date'] = "2002-03-31"  

# Save the dictionary as JSON to a file.
output_file = "data.json"

with open(output_file, 'w') as file:
    json.dump(json_data, file, indent=4)

print(f"Modified JSON data has been saved to {output_file}")
