import requests
from backend.db import SUBSCRIPTION_KEY

def analyseimg():
    vision_service_address = "https://southeastasia.api.cognitive.microsoft.com/vision/v2.0/"
    address = vision_service_address + "analyze"
    
    parameters  = {'visualFeatures':'Objects','language':'en'}

    img_path = f"./TestImages/crowd.jpg"
    img_data = open(img_path, 'rb').read()

    headers    = {'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY}

    response = requests.post(address, headers=headers, params=parameters, data=img_data)

    results = response.json()
    counter = 0
    for i in results['objects']:
        if i['object'] == 'person':
            counter+=1

    print(counter)
  
    return counter