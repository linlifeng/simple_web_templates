from jinja2 import Environment, FileSystemLoader
import json
from sys import argv

# Define the folder containing the templates
file_loader = FileSystemLoader('templates')

# Create the Jinja2 environment
env = Environment(loader=file_loader)

# Load the template
template = env.get_template('index.html')

# Define data to pass into the template
data = {
    'bg': './images/bg.jpg',
    'name': 'John Smith',
    "overview": "Overview Content",
    'contact':"contact content",
    'sections': [
        {
            'id': 'cepheid',
            'title': 'Cepheid',
            'pages': [
                {
                    "title": "Cepheid (2020.10 to present)",
                    "content": "section 1 page1 content"
                },
                {
                    "title": "Major Achievements",
                    "content": "section 1 page2 content"
                },
            ] 
        },
        {
            'id': 'section_2',
            "title": 'Section 2',
            'pages': [
                {
                    "title": "page1",
                    "content": "section 1 page1 content"
                },
                {
                    "title": "page2",
                    "content": "section 1 page2 content"
                },
            ] 
        },
        {
            'id': 'section_3',
            "title": 'Section 3',
            'pages': [
                {
                    "title": "page1",
                    "content": "section 1 page1 content"
                },
                {
                    "title": "page2",
                    "content": "section 1 page2 content"
                },
            ] 
        },
        {
            'id': 'section_4',
            "title": 'Section 4',
            'pages': [
                {
                    "title": "page1",
                    "content": "section 1 page1 content"
                },
                {
                    "title": "page2",
                    "content": "section 1 page2 content"
                },
            ] 
        }
    ]
}
data = json.load(open(argv[1]))
# Render the template with data
output = template.render(data)

# Print the rendered template
print(output)
