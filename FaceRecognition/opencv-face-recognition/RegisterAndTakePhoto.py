import tkinter as tk
from tkinter import filedialog,Text,Label,Entry,StringVar,messagebox,Checkbutton,Radiobutton,filedialog
from tkinter import *
import os
from PIL import Image,ImageTk
import mysql.connector
from mysql.connector import Error
import sys


root=tk.Tk()
root.title("Face recognition")
label1=Label(root,text="Face attendance checking system",font=("arial",16,"bold")).pack()



apps=[]
if os.path.isfile('save.txt'):
    with open('save.txt','r') as f:
        tempApps=f.read()
        tempApps=tempApps.split(',')
        apps=[x for x in tempApps if x.strip()]

def addApp():
    for widget in frame.winfo_children():
        widget.destroy()

    filename=filedialog.askopenfilename(initialdir="/",
    title="Select file",filetypes=(("executables","*.exe"),("all files","*.*")))
    apps.append(filename)
    print(filename)
    for app in apps:
        label=tk.Label(frame,text=app,bg="gray")
        label.pack()

def runApps():
    for app in apps:
        os.startfile(app)

sid=StringVar()
sn=StringVar()
varGender=StringVar()
sc=StringVar()

def insertOrUpdate(id,name,gender,classid):
	try:
		connection = mysql.connector.connect(host='localhost',
											database='facebase',
											user='root',
											password='123456')
		if connection.is_connected():
			db_Info = connection.get_server_info()
			print("Connected to MySQL Server version ", db_Info)
			cursor = connection.cursor()
			select="SELECT * FROM Students where ID="+str(id)		
			cursor.execute(select)
			isRecordExist=0
		for row in cursor:
			isRecordExist=1
		if(isRecordExist==1):
			update="""UPDATE Students SET Name=%s where ID=%s"""
			data=(name,id)
			cursor.execute(update,data)
			connection.commit()
		else:
			data=(id,name,gender,classid)
			Insert="""INSERT INTO Students(ID, Name,Gender,Class) VALUES (%s, %s, %s,%s)"""
			
			cursor.execute(Insert,data )
			connection.commit()
	except Error as e:
		print("Error while connecting to MySQL", e)
	finally:
		if (connection.is_connected()):
			cursor.close()
			connection.close()
			print("MySQL connection is closed")



def signUp():
    studentid=sid.get()
    studentname=sn.get()
    studentgender=varGender.get()
    studentclass=sc.get()
    # print(f"Student information is {studentid} {studentname} {studentgender} {studentclass}")
    insertOrUpdate(studentid,studentname,studentgender,studentclass)

    studentnameFinale=os.path.join(studentname).replace(" ", "_")
    path="D:\RND-Facecognition-DEEPLEARNING\opencv-face-recognition\dataset/"+str(studentnameFinale)
    
    try:
    	os.makedirs(path)
    except OSError:
        print ("Creation of the directory %s failed" % path)
    else:
        print ("Successfully created the directory %s " % path)    
    
    os.system('python build_face_dataset.py --cascade haarcascade_frontalface_default.xml --output dataset/'+studentnameFinale) 
    
    os.mkdir("D:/RND-Facecognition-DEEPLEARNING/opencv-face-recognition/alignedDataset/" +studentnameFinale)
    os.system('python align_faces.py --shape-predictor shape_predictor_68_face_landmarks.dat --output alignedDataset '+studentnameFinale+' --dataset ' + studentnameFinale)
    os.system('python extract_embeddings.py --dataset alignedDataset --embeddings output/embeddings.pickle --detector face_detection_model --embedding-model openface_nn4.small2.v1.t7')
    os.system('python train_model.py --embeddings output/embeddings.pickle --recognizer output/recognizer.pickle --le output/le.pickle')
    tk.messagebox.showinfo("Welcome","Student create sucessfully")


def takePhoto():
    filename = filedialog.askdirectory()
    print(os.path.basename(filename))
    os.system('python build_face_dataset.py --cascade haarcascade_frontalface_default.xml --output ' +filename)
    os.mkdir("D:/RND-Facecognition-DEEPLEARNING/opencv-face-recognition/alignedDataset/" +os.path.basename(filename))
    os.system('python align_faces.py --shape-predictor shape_predictor_68_face_landmarks.dat --output alignedDataset/'+os.path.basename(filename)+' --dataset ' + filename)
    os.system('python extract_embeddings.py --dataset alignedDataset --embeddings output/embeddings.pickle --detector face_detection_model --embedding-model openface_nn4.small2.v1.t7')
    os.system('python train_model.py --embeddings output/embeddings.pickle --recognizer output/recognizer.pickle --le output/le.pickle')
canvas=tk.Canvas(root,height=600,width=500,bg="#263D42")
canvas.pack()

frame=tk.Frame(root,bg="white")
# frame.place(relwidth=0.8,relheight=0.2 ,relx=0.1,rely=0.1)

image=Image.open("D:\RND-Facecognition-DEEPLEARNING\opencv-face-recognition\image.jpg")
photo=ImageTk.PhotoImage(image)

label_0=Label(root,text="Student ID :", width=20)
label_0.place(x=100,y=280)

label_1=Label(root,text="Student name :", width=20)
label_1.place(x=100,y=320)


label_2=Label(root,text="Student gender :", width=20)
label_2.place(x=100,y=360)

label_3=Label(root,text="Student class :", width=20)
label_3.place(x=100,y=400)


entry=Entry(root,textvar=sid,width=30)
entry.place(x=260,y=280)


entry=Entry(root,textvar=sn,width=30)
entry.place(x=260,y=320)

r1=Radiobutton(root,text="Male",variable=varGender,value="Male").place(x=260,y=360)
r2=Radiobutton(root,text="Female",variable=varGender,value="Female").place(x=320,y=360)


entry=Entry(root,textvar=sc,width=30)
entry.place(x=260,y=400)


label=Label(image=photo,height=200,width=400)
label.place(x=50,y=50)

signUp=tk.Button(root,text="Sign up",relief="solid",width=20,font=("arial",16,"bold"),command=signUp)
signUp.place(x=120,y=460)

takePhoto=tk.Button(root,text="Take photo",relief="solid",width=20,font=("arial",16,"bold"),command=takePhoto)
takePhoto.place(x=120,y=520)



openFile=tk.Button(root,text="Open file",padx=10,pady=5,fg="white",bg="#263D42" ,command=addApp)

openFile.pack()

runApps=tk.Button(root,text="Run app",padx=10,pady=5,fg="white",bg="#263D42" ,command=runApps)

runApps.pack()

for app in apps:
    label=tk.Label(frame,text=app)
    label.pack()

root.mainloop()

with open('save.txt','w') as f :
    for app in apps:
        f.write(app+',')