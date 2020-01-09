# USAGE
# python build_face_dataset.py --cascade haarcascade_frontalface_default.xml --output dataset/*

# import the necessary packages
from imutils.video import VideoStream
import argparse
import imutils
import time
import cv2
import os
import pyodbc 
import mysql.connector
from mysql.connector import Error
# construct the argument parser and parse the arguments

ap = argparse.ArgumentParser()
ap.add_argument("-c", "--cascade", required=True,
	help = "path to where the face cascade resides")
ap.add_argument("-o", "--output", required=True,
	help="path to output directory")
args = vars(ap.parse_args())

# load OpenCV's Haar cascade for face detection from disk
detector = cv2.CascadeClassifier(args["cascade"])

# initialize the video stream, allow the camera sensor to warm up,
# and initialize the total number of example faces written to disk
# thus far

# def insertOrUpdate(id,name,gender,classid):
# 	try:
# 		connection = mysql.connector.connect(host='localhost',
# 											database='facebase',
# 											user='root',
# 											password='123456')
# 		if connection.is_connected():
# 			db_Info = connection.get_server_info()
# 			print("Connected to MySQL Server version ", db_Info)
# 			cursor = connection.cursor()
# 			select="SELECT * FROM Students where ID="+str(id)		
# 			cursor.execute(select)
# 			isRecordExist=0
# 		for row in cursor:
# 			isRecordExist=1
# 		if(isRecordExist==1):
# 			update="""UPDATE Students SET Name=%s where ID=%s"""
# 			data=(name,id)
# 			cursor.execute(update,data)
# 			connection.commit()
# 		else:
# 			data=(id,name,gender,classid)
# 			Insert="""INSERT INTO Students(ID, Name,Gender,Class) VALUES (%s, %s, %s,%s)"""
			
# 			cursor.execute(Insert,data )
# 			connection.commit()
# 	except Error as e:
# 		print("Error while connecting to MySQL", e)
# 	finally:
# 		if (connection.is_connected()):
# 			cursor.close()
# 			connection.close()
# 			print("MySQL connection is closed")
# id = input("Enter student ID ")
# name = input("Enter student name ")
# gender= input("Enter student gender(Male/Female) ")
# classid= input("Enter student class ")
# insertOrUpdate(id,name,gender,classid)


# path="D:\RND-Facecognition-DEEPLEARNING\opencv-face-recognition\dataset/"+str(name)
# output==path
# try:
# 	os.makedirs(path)
# except OSError:
#     print ("Creation of the directory %s failed" % path)
# else:
#     print ("Successfully created the directory %s " % path)

print("[INFO] starting video stream...")
vs = VideoStream(src=0).start()
# vs = VideoStream(usePiCamera=True).start()
time.sleep(2.0)
total = 0

# loop over the frames from the video stream
while True:
	# grab the frame from the threaded video stream, clone it, (just
	# in case we want to write it to disk), and then resize the frame
	# so we can apply face detection faster
	frame = vs.read()
	orig = frame.copy()
	frame = imutils.resize(frame, width=500)

	# detect faces in the grayscale frame
	rects = detector.detectMultiScale(
		cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY), scaleFactor=1.3, 
		minNeighbors=5, minSize=(30, 30))

	# loop over the face detections and draw them on the frame
	for (x, y, w, h) in rects:
		cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

	# show the output frame
	cv2.imshow("Frame", frame)
	key = cv2.waitKey(1) & 0xFF

	# if the `k` key was pressed, write the *original* frame to disk
	# so we can later process it and use it for face recognition
	if key == ord("k"):
		p = os.path.sep.join([args["output"], "{}.png".format(
			str(total).zfill(5))])
		cv2.imwrite(p, orig)
		total += 1

	# if the `q` key was pressed, break from the loop
	elif key == ord("q"):
		break

# do a bit of cleanup
print("[INFO] {} face images stored".format(total))
print("[INFO] cleaning up...")
cv2.destroyAllWindows()
vs.stop()
