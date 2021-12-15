from flask import Flask, send_from_directory
from backend.webcam import getCrowdCount

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return {"status": "success", "message": "welcome to the flask app"}

@app.route("/crowd", methods=["GET"])
def crowd():
    try:
        crowdCount = getCrowdCount()
        return {"status":"success", "crowdCount": crowdCount}
    except:
        return {"status":"fail", "crowdCount":"error"}