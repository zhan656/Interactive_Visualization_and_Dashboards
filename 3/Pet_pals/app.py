# import necessary libraries
import numpy as np

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
# @TODO: Setup your database here

my_data = []
# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

# Query the database and send the jsonified results
# @TODO: Create a route to accept your form data and
# save it to your database

# @TODO: Create a route to send the data needed for your plots
@app.route("/api/data")
def data():
    print(my_data)
    return jsonify(my_data)


@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        Petname = request.form["petName"]
        Petage = request.form["petAge"]
        Pettype = request.form["petType"]

        form_data = {
            "petName": Petname,
            "petAge": int(Petage),
            "petType": Pettype
        }

        my_data.append(form_data)
    elif request.method == "GET":
        return "Thanks for the form data!"

    return render_template("form.html")



if __name__ == "__main__":
    app.run(debug = True)
