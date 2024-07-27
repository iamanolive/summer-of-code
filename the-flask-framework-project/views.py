from flask import Blueprint
from flask import render_template
from flask import request
from flask import jsonify
from flask import redirect, url_for

# initializing the blueprint
views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html", name = "winnie")


# @views.route("/profile/<username>")
# def profile(username):
#     return render_template("index.html", name = username)

@views.route("/user_profile")
def profile():
    return render_template("profile.html")


# query parameters
# @views.route("/user_profile")
# def profile():
#     args = request.args
#     name = args.get("name")
#     return render_template("index.html", name = name)


# return json data
@views.route("/json")
def get_json():
    return jsonify({"name": "winnie", "coolness": 100})


# getting data from incoming request
@views.route("/data")
def get_data():
    data = request.json
    return jsonify(data)


# redirecting
@views.route("/go-to-home")
def go_to_home():
    return redirect(url_for("views.home"))