from flask import Flask, render_template, request
from color_by_first_letter import ColorByFirstLetter
import json

app = Flask(__name__)


@app.route('/', methods=["GET"])
def create_colored_page():
   request_data = request.get_json()
   color_profile = request_data["colorProfile"]
   text = request_data["text"]
   c = ColorByFirstLetter(color_profile, text)
   
   return c.create_page_object()
