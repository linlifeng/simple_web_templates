import os
from flask import Flask, render_template, abort

app = Flask(__name__)

BOOKS_DIR = 'chinese-novel/resources'

# Home route for listing categories
@app.route('/')
def home():
    categories = os.listdir(BOOKS_DIR)
    return render_template('home.html', categories=categories)

# Route for listing books in a category
@app.route('/category/<category_name>')
def category(category_name):
    category_path = os.path.join(BOOKS_DIR, category_name)
    if not os.path.exists(category_path):
        abort(404)
    books = os.listdir(category_path)
    return render_template('category.html', category=category_name, books=books)

# Route for listing chapters in a book
@app.route('/category/<category_name>/book/<book_name>')
def book(category_name, book_name):
    book_path = os.path.join(BOOKS_DIR, category_name, book_name)
    if not os.path.exists(book_path):
        abort(404)
    chapters = sorted([int(f.replace('.html', '')) for f in os.listdir(book_path) if f.endswith('.html')])
    return render_template('book.html', category=category_name, book=book_name, chapters=chapters)

# Route for rendering a specific chapter (without .html in URL)
@app.route('/category/<category_name>/book/<book_name>/chapter/<chapter_name>')
def chapter(category_name, book_name, chapter_name):
    book_path = os.path.join(BOOKS_DIR, category_name, book_name)
    
    # Check if the book folder exists
    if not os.path.exists(book_path):
        abort(404)
    
    # Read the chapter content
    chapter_path = os.path.join(book_path, f'{chapter_name}.html')
    if not os.path.exists(chapter_path):
        abort(404)

    with open(chapter_path, 'r') as file:
        chapter_content = file.read()

    # Retrieve all chapters to pass to the sidebar
    chapters = sorted([int(f.replace('.html', '')) for f in os.listdir(book_path) if f.endswith('.html')])

    # Render the chapter template and pass chapters for sidebar
    return render_template(
        'chapter.html',
        content=chapter_content,
        category=category_name,
        book=book_name,
        chapter_name=chapter_name,
        chapters=chapters  # Pass chapters to the template
    )

if __name__ == '__main__':
    app.run(debug=True)

