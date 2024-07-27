from flask import Blueprint
from flask import render_template

# initializing the blueprint
views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html", name = "winnie")

@views.route("/profile/<username>")
def profile(username):
    return render_template("index.html", name = username)