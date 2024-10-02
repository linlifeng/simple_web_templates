from flask import Flask, render_template, jsonify, Response
import json
from weasyprint import HTML

app = Flask(__name__)

# Resume view (HTML)
@app.route("/")
def resume():
    with open("resume.json") as f:
        resume_data = json.load(f)
    return render_template("resume_template3.html", resume=resume_data, is_pdf=False)

# Export resume as PDF
@app.route("/export/pdf")
def export_pdf():
    with open("resume.json") as f:
        resume_data = json.load(f)
    
    # Render the HTML template with `is_pdf=True`
    rendered_html = render_template("resume_template4.html", resume=resume_data, is_pdf=True)
    
    # Convert the rendered HTML to a PDF using WeasyPrint
    pdf = HTML(string=rendered_html).write_pdf()

    # Return the PDF as a response
    return Response(pdf, mimetype="application/pdf",
                    headers={"Content-Disposition": "attachment;filename=resume.pdf"})

if __name__ == "__main__":
    app.run(debug=True)

