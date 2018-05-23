# import necessary libraries
import pandas as pd
import datetime as dt
import numpy as np

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect
)

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///db/bigfoot.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the table
Bigfoot = Base.classes.bigfoot

# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Setup
#################################################
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/bigfoot.sqlite"

db = SQLAlchemy(app)



class Bigfoot(db.Model):
    __tablename__ = 'Bigfoot'

    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    title = db.Column(db.String)
    classification = db.Column(db.String)
    timestamp = db.Column(db.String)
    latitude = db.Column(db.Numeric)
    longtitude = db.Column(db.Numeric)

    def __repr__(self):
        return '<Bigfoot %r>' % (self.name)

@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()
        
        
# Query the database and send the jsonified results
@app.route("/data")
def data():

    # @TODO: Use a database query to fetch the results and send
    # the data to your plot
    # class Bigfoot(db.Model):
    # __tablename__ = 'Bigfoot'

    # id = db.Column(db.Integer, primary_key=True)
    # number = db.Column(db.Integer)
    # title = db.Column(db.Text)
    # classification = db.Column(db.Text)
    # timestamp = db.Column(db.Text)
    # latitude = db.Column(db.Float)
    # longtitude = db.Column(db.Float)

    # def __repr__(self):
        # return '<Bigfoot %r>' % (self.name)
    
    
    sel = [func.strftime("%Y", Bigfoot.timestamp), func.count(Bigfoot.timestamp)]
    results = session.query(*sel).\
        group_by(func.strftime("%Y", Bigfoot.timestamp)).all()
    # @TODO: YOUR CODE HERE
    df = pd.Dataframe(results,columns=['months','sighting'])
    return jsonify(df.to_dict(orient='records'))


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
