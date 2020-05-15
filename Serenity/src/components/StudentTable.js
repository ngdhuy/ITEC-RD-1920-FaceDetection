import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import StudentDataService from "../service/StudentService";
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';



export class StudentService extends Component {
    getStudent() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/student', { 'headers': { 'Authorization': AuthStr } })
    }
}

export class StudentTable extends Component {

    constructor(props) {
        super(props);
        this.onChangeStudentID = this.onChangeStudentID.bind(this);
        this.onChangeClassID = this.onChangeClassID.bind(this);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentMail = this.onChangeStudentMail.bind(this);
        this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
        this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
        this.state = { 
            isAdmin: true,
            visibleRight: false,
            student_id:"",
            name:"",
            email:"",
            phone:"",
            gender:"",
            class_id :"",
            submitted: false
         };       
        this.StudentService = new StudentService();       
    }

    componentDidMount() {
        this.loadStudentList();
    }

    loadStudentList = () => {
        this.StudentService.getStudent()
            .then(res => res.data)
            .then(data => { this.setState({ students: data }) })
            .catch(error => {
                if (error) {
                    this.setState({
                        isAdmin: false
                    })
                }
            })
    }

    deleteStudent() {    
        StudentDataService.delete(2)
          .then(response => {
            console.log(response.data);
          
          })
          .catch(e => {
            console.log(e);
          });
    }

    onChangeStudentID(e) {
        this.setState({
            student_id: e.target.value
        });
      }
    
    onChangeStudentName(e) {
        this.setState({
            name: e.target.value
        });
      }
    onChangeStudentMail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeStudentPhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeStudentGender(e) {
        this.setState({
            gender: e.target.value
        });
    }
    onChangeClassID(e) {
        this.setState({
            class_id: e.target.value
        });
      }
    saveStudent() {
        var data = {
            student_id: this.state.student_id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            gender: this.state.gender,
            class_id: this.state.class_id          
        };
    
        StudentDataService.create(data)
            .then(res => res.data)
            .then(data => {
                if(data){
                    this.setState({
                        student_id:"",
                        name:"",
                        email:"",
                        phone:"",
                        gender:"",
                        class_id :"",
                        visibleRight: false     
                    }, () => {this.loadStudentList()})
                }
            })
            .catch(e => {
            if (e) { this.setState({ isAdmin: false }) }
             });
        }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning" />
            <Button type="button" icon="pi pi-times" className="p-button-danger" />
        </div>;
    }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus" onClick={() => this.setState({visibleRight: true})} />;


        return (
            <div className="p-grid">
                <div className="p-col-12">
                    {this.state.isAdmin ?
                        <div className="card card-w-title datatable-demo">
                            <h1>Students List</h1>
                            
                            <DataTable value={this.state.students} ref={(el) => this.dt = el} selectionMode="single" header="Students List" paginator={true} rows={10}
                                responsive={true} >
                                
                                <Column field="student_id" header="Student ID" sortable={true}  />
                                <Column field="name" header="Student Name" sortable={true}  />
                                <Column field="email" header="Email Address" sortable={true}  />
                                <Column field="phone" header="Phone Number" sortable={true}  />
                                <Column field="gender" header="Gender" sortable={true}  />
                                <Column field="class_id" header="Class ID" sortable={true} />
                                <Column header={actionHeader} body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
                            </DataTable>
                        </div> : <Access />
                    }
                </div>
                <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false})} style={{width: '30%'}}>
                    <h1 style={{fontWeight:'normal'}}>Add Student</h1>
                        <div>
                            <h3>Student ID</h3><br/>
                            <InputText value={this.state.student_id} onChange={this.onChangeStudentID} id="student_id" name="student_id" /> <br/>
                            <h3>Student Name</h3><br/>
                            <InputText value={this.state.name} onChange={this.onChangeStudentName} id="name" name="name" /> <br/>
                            <h3>Email Address</h3><br/>
                            <InputText value={this.state.email} onChange={this.onChangeStudentMail} id="email" name="email" /> <br/>
                            <h3>Phone Number</h3><br/>
                            <InputText value={this.state.phone} onChange={this.onChangeStudentPhone} id="phone" name="phone" /> <br/>
                            <h3>Gender</h3><br/>
                            <InputText value={this.state.gender} onChange={this.onChangeStudentGender} id="gender" name="gender" /> <br/>
                            <h3>Class ID</h3><br/>
                            <InputText value={this.state.class_id} onChange={this.onChangeClassID} id="class_id" name="class_id" /> <br/>
                        </div>
                    <br/>
                    <Button type="button" onClick={this.saveStudent} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Close" className="p-button-secondary"/>
                </Sidebar>
            </div>
        );
    }
}

