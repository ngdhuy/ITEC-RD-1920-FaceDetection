import argparse
import subprocess
import os 
from subprocess import Popen
import subprocess
import webbrowser
 

# id = input("Enter student ID ")
# os.system('python build_face_dataset.py --cascade haarcascade_frontalface_default.xml --output dataset/jin')
studentname="nguyen van an"
studentnameFinale=os.path.join(studentname).replace(" ", "_")
# print(studentnameFinale)
os.system("python build_face_dataset.py --cascade haarcascade_frontalface_default.xml --output dataset/"+ studentnameFinale ")
