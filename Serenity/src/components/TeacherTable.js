import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import TeacherDataService from "../service/TeacherService";
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';
import { DeleteNotification } from '../components/DeleteNotification';
import { Growl } from 'primereact/growl';

export class TeacherService extends Component {
    getTeacher() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/teacher', { 'headers': { 'Authorization': AuthStr } })
    }
}

export class TeacherTable extends Component {

    constructor(props) {
        super(props);
        this.onChangeTeacherID = this.onChangeTeacherID.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeTeacherName=this.onChangeTeacherName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);

        this.state = { 
            isAdmin: true,
            visibleRight: false,
            add:true,
            submitted: false,
            dataSelected: null,         
            teacher_id: "",
            name: "",
            email:"",
            phone:"",
            gender:""
         };
        
         this.TeacherService = new TeacherService();
       
    }

    componentDidMount() {
        this.loadTeacherList()
    }
   
    loadTeacherList = () => {
        this.TeacherService.getTeacher()
        .then(res => res.data)
        .then(data => { this.setState({ teachers: data }) })
        .catch(error => {
            if (error) {
                this.setState({
                    isAdmin: false
                })
            }
        })
    }
    onChangeTeacherID(e) {
        this.setState({
            teacher_id: e.target.value
        });
      }
    
    onChangeTeacherName(e) {
        this.setState({
            name: e.target.value
        });
      }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
      }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
      }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
      }
    saveTeacher() {
        var data = {
            teacher_id: this.state.teacher_id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            gender: this.state.gender,           
        }; 
        TeacherDataService.create(data)
        .then(res => res.data)
        .then(data => {
            if(data){
                this.setState({
                    teacher_id:"",
                    name:"",
                    email:"",
                    phone:"",
                    gender:"",
                    visibleRight: false          
                },() => { this.loadTeacherList() });
            }   
          })
          .catch(e => {
            if (e) {
                this.setState({
                    isAdmin: false
                })
            }
          });
      }
      openEditTeacher = (id) => {
          
        TeacherDataService.getbyid(id).then(response => {
            this.setState({
                teacher_id: response.data.teacher_id,
                name: response.data.name,
                email: response.data.email,
                phone: response.data.phone,
                gender: response.data.gender,
                visibleRight: true,
                add:false
            })
        })
    }
    updateTeacher(id){    
        var data = {
            teacher_id: this.state.teacher_id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            gender: this.state.gender,
        }; 
        TeacherDataService.update(id,data)
            .then(res => res.data)
            .then(data => {
                if(data) {
                    this.setState({
                        teacher_id:"",
                        name:"",
                        email:"",
                        phone:"",
                        gender:"",
                        visibleRight: false,
                    },() => {this.loadTeacherList()})
                }
            })
            .catch(e => {
            if (e) {
                this.setState({
                    isAdmin: false
                })
            }
          });
      }
      deleteTeacher=(id)=>{    
        TeacherDataService.delete(id)
          .then(() => {this.loadTeacherList()})
          .catch(e => {
            console.log(e);
          });
      }
    actionTemplate=(rowData, column) => {
        return ( 
        <React.Fragment>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning"  onClick={(e) => this.openEditTeacher(rowData.teacher_id)} />
            <Button icon="pi-md-close" className="p-button-danger" style={{ 'float': 'right' }} onClick={(e) => this.deleteNotify.delete(rowData.teacher_id)} />
        </React.Fragment>
        );
    }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus" onClick={() => this.setState({visibleRight: true})}></Button>;


        return (
            <div className="p-grid">
                <Growl ref={(el) => this.growl = el} />
                 <DeleteNotification ref={el => this.deleteNotify = el} accessDelete={(e) => this.deleteTeacher(e)}
                />
                <div className="p-col-12">
                    {this.state.isAdmin ?
                        <div className="card card-w-title datatable-demo">
                            <h1>Teachers List</h1>

                            <DataTable value={this.state.teachers} selectionMode="single" header="Teachers List" paginator={true} rows={10}
                                responsive={true}  editMode="row"  selection={this.state.selected} onSelectionChange={e => this.setState({selected: e.value})} >                               
                                <Column field="teacher_id" header="Teacher ID"  sortable={false}  />
                                <Column field="name" header="Teacher Name" sortable={true}  />
                                <Column field="email" header="Email Address" sortable={true}  />
                                <Column field="phone" header="Phone Number" sortable={true}  />
                                <Column field="gender" header="Gender" sortable={true}  />
                                <Column  header= {actionHeader} field ="" body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} /> 
                            </DataTable> 
                        </div> : <Access />
                    }
                </div>
                {this.state.add ?
                <div>
                <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false})} style={{width: '30%'}}>
                    <h1 style={{fontWeight:'normal'}}>Add new Teacher</h1>
                        <div>
                            <h3>Teacher ID</h3><br/>
                            <InputText value={this.state.Teacher_id} onChange={this.onChangeTeacherID} id="teacher_id" name="teacher_id" /> <br/>
                            <h3>Teacher Name</h3><br/>
                            <InputText value={this.state.name} onChange={this.onChangeTeacherName} id="name" name="name" /> <br/>
                            <h3>Teacher Email</h3><br/>
                            <InputText value={this.state.email} onChange={this.onChangeEmail} id="email" name="email" /> <br/>
                            <h3>Teacher Phone</h3><br/>
                            <InputText value={this.state.phone} onChange={this.onChangePhone} id="phone" name="phone" /> <br/>
                            <h3>Teacher Gender</h3><br/>
                            <InputText value={this.state.gender} onChange={this.onChangeGender} id="gender" name="gender" /> <br/>
                            <h3>Class ID</h3><br/>
                            <InputText value={this.state.class_id} onChange={this.onChangeClassID} id="class_id" name="class_id" /> <br/>
                        </div>
                    <br/>
                    <Button type="button" onClick={this.saveTeacher} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false,add:false})} label="Close" className="p-button-secondary"/>
                </Sidebar>
            </div>:
            <div>
            <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false,add:true})} style={{width: '30%'}}>
                <h1 style={{fontWeight:'normal'}}>Edit Teacher</h1>
                    <div>
                        <h3>Teacher ID</h3><br/>
                        <InputText value={this.state.teacher_id} onChange={this.onChangeTeacherID} id="teacher_id" name="teacher_id" /> <br/>
                        <h3>Teacher Name</h3><br/>
                        <InputText value={this.state.name} onChange={this.onChangeTeacherName} id="name" name="name" /> <br/>
                        <h3>Teacher Email</h3><br/>
                        <InputText value={this.state.email} onChange={this.onChangeEmail} id="email" name="email" /> <br/>
                        <h3>Teacher Phone</h3><br/>
                        <InputText value={this.state.phone} onChange={this.onChangePhone} id="phone" name="phone" /> <br/>
                        <h3>Teacher Gender</h3><br/>
                        <InputText value={this.state.gender} onChange={this.onChangeGender} id="gender" name="gender" /> <br/>
                        <h3>Class ID</h3><br/>
                        <InputText value={this.state.class_id} onChange={this.onChangeClassID} id="class_id" name="class_id" /> <br/>
                    </div>
                <br/>
                <Button type="button" onClick={(e) => this.updateTeacher(this.state.teacher_id)} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => this.setState({visibleRight: false,add:true})} label="Close" className="p-button-secondary"/>
            </Sidebar>
        </div>
            }
            </div>
        );
    }
}
