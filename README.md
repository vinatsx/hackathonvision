# hackathonvision

# Starting the App
To start the app, you need to run both the React app and Flask app.

You can do this by running ```testscript.sh``` in the crowd-app folder.

Alternatively, run ```npm start``` in the ```crowd-app``` folder, and run ```flask run``` in the ```crowd-app/api``` folder in 2 different terminals.

# Microsoft Azure Computer Vision
Requires a Microsoft Azure Computer Vision subscription key.

Create a ```db.py``` file in the ```crowd-app/api/backend``` directory. 

Include ```SUBSCRIPTION_KEY={insert subscription key here}``` into the ```db.py``` file.

Refer to https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/ for more details on setting up and obtaining an API key.
