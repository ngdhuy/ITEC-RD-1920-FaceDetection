
	# USAGE
#python align_faces.py --shape-predictor shape_predictor_68_face_landmarks.dat --dataset dataset\* --output alignedDataset

# import the necessary packages
from imutils.face_utils import FaceAligner
from imutils.face_utils import rect_to_bb
import argparse
import imutils
import dlib
import cv2
import os
from imutils import paths
# construct the argument parser and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-p", "--shape-predictor", required=True,
	help="path to facial landmark predictor")
ap.add_argument("-i", "--dataset", required=True,
	help="path to input directory of faces + images")
ap.add_argument("-o", "--output", required=True,
	help="path to output directory")	
args = vars(ap.parse_args())

# initialize dlib's face detector (HOG-based) and then create
# the facial landmark predictor and the face aligner
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(args["shape_predictor"])
fa = FaceAligner(predictor, desiredFaceWidth=256)


imagePaths = list(paths.list_images(args["dataset"]))
total = 0
for (i, imagePath) in enumerate(imagePaths):
# load the input image, resize it, and convert it to grayscale
	print("[INFO] processing image {}/{}".format(i + 1,len(imagePaths)))
	# name = imagePath.split(os.path.sep)[-2]

	image = cv2.imread(imagePath)
	# image = imutils.resize(image, width=800)
	gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# show the original input image and detect faces in the grayscale
# image

	
	rects = detector(gray, 2)

# loop over the face detections
	for rect in rects:
	# extract the ROI of the *original* face, then align the face
	# using facial landmarks
		(x, y, w, h) = rect_to_bb(rect)
		# faceOrig = imutils.resize(image[y:y + h, x:x + w], width=256)
		faceAligned = fa.align(image, gray, rect)

		# import uuid
		# f = str(uuid.uuid4())
		# cv2.imwrite("alignedDataset/" + f + ".png", faceAligned)
		p = os.path.sep.join([args["output"], "{}.png".format(str(total).zfill(4))])
		cv2.imwrite(p, faceAligned)
		total += 1
		key = cv2.waitKey(1) & 0xFF
		if key == ord("q"):
			break
	# display the output images
		# cv2.imshow("Original", faceOrig)
		# cv2.imshow("Aligned", faceAligned)
		# cv2.waitKey(0)
