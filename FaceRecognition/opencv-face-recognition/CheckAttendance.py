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

def __init__(self,master):
    self.master=master
    self.master.geometry('250x200+100+200')
    self.master.title('Records')
    self.connection = mysql.connector.connect(host='localhost',
											database='facebase',
											user='root',
											password='123456')
    self.cur = self.connection.cursor()
    self.dateLabel = Label(self.master, text="Date", width=10)
    self.dateLabel.grid(row=0, column=0)
    self.BMILabel = Label(self.master, text="BMI", width=10)
    self.BMILabel.grid(row=0, column=1)
    self.stateLabel = Label(self.master, text="Status", width=10)
    self.stateLabel.grid(row=0, column=2)
    self.showallrecords()

			 
def readfromdatabase():
	try:
		connection = mysql.connector.connect(host='localhost',
											database='facebase',
											user='root',
											password='123456')
		if connection.is_connected():
			db_Info = connection.get_server_info()
			print("Connected to MySQL Server version ", db_Info)
			cursor = connection.cursor()
			cursor.execute("SELECT * FROM Students")
			print(cursor.fetchall())
		
			connection.commit()
	except Error as e:
		print("Error while connecting to MySQL", e)
	finally:
		if (connection.is_connected()):
			cursor.close()
			connection.close()
			print("MySQL connection is closed")

def showallrecords(self):
    data = self.readfromdatabase()
    for index, dat in enumerate(data):
        Label(self.master, text=dat[0]).grid(row=index+1, column=0)
        Label(self.master, text=dat[1]).grid(row=index+1, column=1)
        Label(self.master, text=dat[2]).grid(row=index+1, column=2)

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
canvas=tk.Canvas(root,height=600,width=500,bg="#263D42")
canvas.pack()

frame=tk.Frame(root,bg="white")
# frame.place(relwidth=0.8,relheight=0.2 ,relx=0.1,rely=0.1)

image=Image.open("D:\RND-Facecognition-DEEPLEARNING\opencv-face-recognition\image.jpg")
photo=ImageTk.PhotoImage(image)

label_0=Label(root,text="CLASS", width=40)
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

takePhoto=tk.Button(root,text="Take photo",relief="solid",width=20,font=("arial",16,"bold"),command=readfromdatabase)
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