
import argparse

import os 
from subprocess import Popen
import subprocess
os.system('python build_face_dataset.py --cascade haarcascade_frontalface_default.xml --output dataset/jin')
os.system('python align_faces.py --shape-predictor shape_predictor_68_face_landmarks.dat --dataset dataset/jin --output alignedDataset/jin')
os.system('python extract_embeddings.py --dataset alignedDataset --embeddings output/embeddings.pickle --detector face_detection_model --embedding-model openface_nn4.small2.v1.t7')
os.system('python train_model.py --embeddings output/embeddings.pickle --recognizer output/recognizer.pickle --le output/le.pickle')
os.system('python recognize_video.py --detector face_detection_model --embedding-model openface_nn4.small2.v1.t7 --recognizer output/recognizer.pickle --le output/le.pickle')

# build_face_dataset.main(['-c/--cascade haarcascade_frontalface_default.xml', '-o/--output dataset/*'])
# build_face_dataset(['--cascade  haarcascade_frontalface_default.xml', '--output dataset'])
# exec('build_face_dataset.py --cascade haarcascade_frontalface_default.xml --output dataset/*')
# Popen('/build_face_dataset.py, -c haarcascade_frontalface_default.xml, -o dataset/*')  
# p = subprocess.Popen(['python', 'build_face_dataset.py', '--cascade''haarcascade_frontalface_default.xml', '--output', 'dataset/*'])
