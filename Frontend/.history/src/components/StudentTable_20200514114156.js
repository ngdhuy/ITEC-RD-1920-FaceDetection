import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import StudentDataService from "../service/StudentService";
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';
import { DeleteNotification } from '../components/DeleteNotification';
import { Growl } from 'primereact/growl';

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
        this.onChangeStudentName=this.onChangeStudentName.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
        this.newStudent = this.newStudent.bind(this);

        this.state = { 
            isAdmin: true,
            visibleRight: false,
            index: 0,
            page: 0,
            rows: 5,
            total: 0,
            sortOrder: 0,
            name: "",
            class_id : "",
            submitted: false,
            formVisible: false,
            selectedRow: null,
            students: {
                student_id: "",
                name: '',
                email: '',
                phone: 0,
                class_id:""
            }
         };
        
         this.StudentService = new StudentService();
       
    }

    componentDidMount(e) {
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
   
    onAdd = () => {
        this.setState({
            formVisible: true,
            selectedRow: null
        });
    }

    onEdit = (data) => {
        this.setState({
            formVisible: true,
            selectedRow: data
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
    onChangeClassID(e) {
        this.setState({
            class_id: e.target.value
        });
      }
    saveStudent() {
        var data = {
            student_id: this.state.student_id,
            name: this.state.name,
            class_id: this.state.class_id
           
        };
    
        StudentDataService.create(data)
          .then(response =>  {
            this.setState({
                student_id: response.data.student_id,
                name: response.data.name,
                class_id: response.data.class_id,
              submitted: true,          
            });
            console.log(response.data);
          })
          .catch(e => {
            if (e) {
                this.setState({
                    isAdmin: false
                })
            }
          });
      }
    
    newStudent() {
        this.setState({
          student_id: "",
          name: "",
          class_id:"",
          submitted: false
        });
      }
      editStudent = (id) => {
        StudentDataService.edit(id)
        .then(res => {
                this.setState({
                    formVisible : true,
                    selectedRow : res
                })
            }) 
    }
      deleteStudent(id){    
        StudentDataService.delete(id)
          .then(response => {
            console.log(response.data);
          
          })
          .catch(e => {
            console.log(e);
          });
      }
    actionTemplate(rowData, column) {
        return ( <React.Fragment>
         <Button icon="pi pi-pencil" className="p-button-warning" style={{ 'float': 'right' }} onClick={(e) => this.deleteStudent(rowData.id)} />
            <Button icon="pi-md-close" className="p-button-danger" style={{ 'float': 'right' }} onClick={(e) => this.deleteNotify.delete(rowData.student_id)} />
            </React.Fragment>);
    }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus" onClick={() => this.setState({visibleRight: true})}></Button>;


        return (
            <div className="p-grid">
                 <DeleteNotification ref={el => this.deleteNotify = el} accessDelete={(e) => this.deleteStudent(e)}
                />
                <div className="p-col-12">
                    {this.state.isAdmin ?
                        <div className="card card-w-title datatable-demo">
                            <h1>Students List</h1>
                           
                           
                            <DataTable value={this.state.students} ref={(el) => this.dt = el} selectionMode="single" header="Students List" paginator={true} rows={10}
                                responsive={true}  editMode="row"  selectionMode="multiple" selection={this.state.selected} onSelectionChange={e => this.setState({selected: e.value})} >
                                
                                <Column field="student_id" header="Student ID"  sortable={true}  />
                                <Column field="name" header="Student Name" sortable={true}  />
                                <Column field="email" header="Email Address" sortable={true}  />
                                <Column field="phone" header="Phone Number" sortable={true}  />
                                <Column field="gender" header="Gender" sortable={true}  />
                                <Column field="class_id" header="Class ID" sortable={true} />
                                <Column  header= {actionHeader} body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
                                <Column rowEditor={true} />
                            </DataTable> <Growl ref={(el) => this.growl = el} />
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
