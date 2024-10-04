from flask import Flask, render_template, abort
import os
import json

app = Flask(__name__)

BOOKS_FOLDER = '../chinese-novel/resources'

# Function to load books from the resources directory
def load_books():
    library = {}
    base_path = BOOKS_FOLDER
    
    # Traverse the base directory for categories
    for category in os.listdir(base_path):
        category_path = os.path.join(base_path, category)
        
        if os.path.isdir(category_path):
            library[category] = []
            
            # For each book in the category, load its info.json and chapters
            for book in os.listdir(category_path):
                book_path = os.path.join(category_path, book)
                
                if os.path.isdir(book_path):
                    # Load info.json
                    info_path = os.path.join(book_path, 'info.json')
                    if os.path.exists(info_path):
                        with open(info_path, 'r', encoding='utf-8') as f:
                            book_info = json.load(f)
                            book_info['path'] = book_path  # Store the path to the book
                            library[category].append(book_info)

    return library

@app.route('/')
def home():
    library = load_books()  # Load the library object
    return render_template('home.html', library=library)


@app.route('/book/<category>/<book_name>/')
def book_view(category, book_name):
    # Load book metadata from info.json
    book_folder = os.path.join(BOOKS_FOLDER, category, book_name)
    info_file = os.path.join(book_folder, 'info.json')

    if not os.path.exists(info_file):
        abort(404)

    with open(info_file, 'r') as f:
        book_info = json.load(f)

    # Load chapter list from the info.json file under "catalogues"
    chapters = []
    for idx, chapter_title in enumerate(book_info.get('catalogues', [])):
        chapter_file = f'{idx}.html'
        if os.path.exists(os.path.join(book_folder, chapter_file)):
            chapters.append({
                'index': idx,
                'title': chapter_title
            })

    return render_template('book.html', book_info=book_info, chapters=chapters, category=category, book_name=book_name)

@app.route('/<category>/<book_name>')
def book_details(category, book_name):
    # Load the specific book information from the `library`
    library = load_books()
    book_info = None

    # Find the book in the appropriate category
    for book in library.get(category, []):
        if book['name'] == book_name:
            book_info = book
            break
    
    if book_info:
        return render_template('book_details.html', book=book_info, category=category)
    else:
        return "Book not found", 404


@app.route('/<category>/<book_name>/chapter/<int:chapter_number>')
def read_chapter(category, book_name, chapter_number):
    # Load the specific book information from the `library`
    library = load_books()
    book_info = None

    # Find the book in the appropriate category
    for book in library.get(category, []):
        if book['name'] == book_name:
            book_info = book
            break
    
    if book_info and 0 <= chapter_number < len(book_info['catalogues']):
        # Load the specific chapter content
        chapter_path = os.path.join(book_info['path'], f"{chapter_number}.html")
        if os.path.exists(chapter_path):
            with open(chapter_path, 'r', encoding='utf-8') as f:
                chapter_content = f.read()
            return render_template('read_chapter.html', title=book_info['catalogues'][chapter_number], content=chapter_content, book=book_info, chapter_index=chapter_number, category=category)
        else:
            return "Chapter not found", 404
    else:
        return "Book not found or chapter number out of range", 404


# @app.route('/<category>/<book_name>/chapter/<int:chapter_idx>')
# def chapter_view(category, book_name, chapter_idx):
#     # Load chapter content
#     book_folder = os.path.join(BOOKS_FOLDER, category, book_name)
#     chapter_file = os.path.join(book_folder, f'{chapter_idx}.html')

#     if not os.path.exists(chapter_file):
#         abort(404)

#     with open(chapter_file, 'r') as f:
#         chapter_content = f.read()

#     # Load the metadata to get the chapter title from the "catalogues"
#     info_file = os.path.join(book_folder, 'info.json')
#     with open(info_file, 'r') as f:
#         book_info = json.load(f)

#     chapter_title = book_info.get('catalogues', [])[chapter_idx]

#     return render_template('chapter.html', book_info=book_info, chapter_title=chapter_title, chapter_content=chapter_content, chapter_idx=chapter_idx, category=category, book_name=book_name)

if __name__ == '__main__':
    app.run(debug=True)
