import tkinter as tk

from tkinter import filedialog,Text,Label,Entry,StringVar,messagebox,Checkbutton,Radiobutton,filedialog
from tkinter import *
import os
from PIL import Image,ImageTk
import mysql.connector
from mysql.connector import Error
import sys


root=tk.Tk()
root.geometry("800x800")
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

def fetchdata():
    connection = mysql.connector.connect(host='localhost',
											database='facebase',
											user='root',
											password='123456')
    cursor=connection.cursor()
    cursor.execute("SELECT name FROM Students")
    list0=cursor.fetchall()
    cursor.close()
    connection.close()
    output=''
    for x in list0:
        output = output+x[0]+'\n'
    query=Label(root,text=output,font="30")
    query.place(x=450,y=300)
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

    tk.messagebox.showinfo("Welcome","Student create sucessfully")


def takePhoto():
    filename = filedialog.askdirectory()  
    os.system('python build_face_dataset.py --cascade haarcascade_frontalface_default.xml --output ' + filename)
canvas=tk.Canvas(root,height=800,width=5,bg='gray39')
canvas.place(x=400,y=40)

frame=tk.Frame(root,bg="white")
# frame.place(relwidth=0.8,relheight=0.2 ,relx=0.1,rely=0.1)

def checkAttendance():
    os.system('python recognize_video.py --detector face_detection_model --embedding-model openface_nn4.small2.v1.t7 --recognizer output/recognizer.pickle --le output/le.pickle' )


image=Image.open("D:\RND-Facecognition-DEEPLEARNING\opencv-face-recognition\image.jpg")
photo=ImageTk.PhotoImage(image)

showStudents=tk.Button(root,text="Show all students",relief="solid",width=20,font=("arial",16,"bold"),command=fetchdata)
showStudents.place(x=50,y=300)


showStudents=tk.Button(root,text="Show all students",relief="solid",width=20,font=("arial",16,"bold"),command=fetchdata)
showStudents.place(x=50,y=380)

checkAttendance=tk.Button(root,text="Check attendance",relief="solid",width=20,font=("arial",16,"bold"),command=checkAttendance)
checkAttendance.place(x=50,y=460)


label_0=Label(root,text="CLASS", width=20)
# label_0.place(x=100,y=500)










label=Label(image=photo,height=200,width=700)
label.place(x=30,y=35)

signUp=tk.Button(root,text="Sign up",relief="solid",width=20,font=("arial",16,"bold"),command=signUp)
# signUp.place(x=120,y=460)




openFile=tk.Button(root,text="Open file",padx=10,pady=5,fg="white",bg="#263D42" ,command=addApp)

# openFile.pack()

runApps=tk.Button(root,text="Run app",padx=10,pady=5,fg="white",bg="#263D42" ,command=runApps)

# runApps.pack()

for app in apps:
    label=tk.Label(frame,text=app)
    # label.pack()

root.mainloop()

with open('save.txt','w') as f :
    for app in apps:
        f.write(app+',')