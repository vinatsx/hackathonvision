# This is the code to connect to your webcam to take pictures


import cv2 
import time
from analyse import *

timeout_end = 10 #10seconds
timeout_start = time.time()


#cv2.namedWindow("test")

# img_counter = 0

while time.time() < timeout_start + timeout_end:
    cam = cv2.VideoCapture(0)
    ret, frame = cam.read()
    cam.release()
    fileloc = "./TestImages/crowd.jpg"
    cv2.imwrite(fileloc, frame)
    counter = analyseimg()
    time.sleep(2) #2s
    #if not ret:
        #print("failed to grab frame")
        #break
    #cv2.imshow("test", frame)

    #k = cv2.waitKey(1)
    #if k%256 == 27:
        # ESC pressed
        #print("Escape hit, closing...")
        #break
    #elif k%256 == 32:
        # SPACE pressed
        #img_name = "opencv_frame.png" # Insert name here
        #cv2.imwrite(img_name, frame)
        #print("{} written!".format(img_name))
        # img_counter += 1

cam.release()
cv2.destroyAllWindows()
