from jinja2 import Environment, FileSystemLoader

# Define the folder containing the templates
file_loader = FileSystemLoader('templates')

# Create the Jinja2 environment
env = Environment(loader=file_loader)

# Load the template
template = env.get_template('index.html')

# Define data to pass into the template
data = {
    'bg': './images/blur.jpg',
    'name': 'John Smith',
    'sections': [
        {
            'id': 'section_1',
            'title': 'section 1',
            'bg': './images/coding_screen1_clear.jpg',
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
            'id': 'section_2',
            "title": 'section 2',
            'bg': "./images/research2_clear.jpg",
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

# Render the template with data
output = template.render(data)

# Print the rendered template
print(output)
