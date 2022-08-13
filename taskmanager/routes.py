from flask import render_template # noqa
from taskmanager import app, db # noqa
from taskmanager.models import Category, Task


@app.route("/")
def home():
    return render_template("tasks.html")