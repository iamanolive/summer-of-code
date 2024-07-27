from flask import Flask
from views import views

# initializing the flask application
app = Flask(__name__)
app.register_blueprint(views, url_prefix = "/views")

if __name__ == "__main__":
    # debug automatically refreshes app when files are changed
    app.run(debug = True, port = 8000)