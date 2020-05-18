import React, { Component } from 'react';
import {DataTable, Column} from 'primereact/datatable';
import {getToken} from '../utils/Common'
import axios from 'axios';
import {Button} from 'primereact/button'
import Access from '../pages/Access'
import AttendanceDataService from "../service/AttendanceService";
import { DeleteNotification } from '../components/DeleteNotification';
import { Growl } from 'primereact/growl';
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';

export class AttendanceService extends Component {
    getAttendance() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/attendance', {'headers': {'Authorization': AuthStr}})
    }
}

export class AttendanceTable extends Component {

    constructor() {
        super();
        this.state = { isAdmin: true };
        this.onChangeAttendanceId = this.onChangeAttendanceId.bind(this);
        this.onChangeStudentOfCourse=this.onChangeStudentOfCourse.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeDateCheck = this.onChangeDateCheck.bind(this);
        this.saveAttendance = this.saveAttendance.bind(this);
       
        this.AttendanceService = new AttendanceService();
        
        this.state = { 
            isAdmin: true,
            visibleRight: false,
            add:true,
            submitted: false,
            attendance_id: "",
            student_of_course_id: "",
            status : "",
            date_check:null,

         };
    }

    componentDidMount() {
        this.loadAttendanceList()
    }
    loadAttendanceList = () => {
        this.AttendanceService.getAttendance()
        .then(res => res.data)
        .then(data => { this.setState({attendances: data})})
        .catch(error => {
            if(error) {
                this.setState({
                    isAdmin: false
                })
            }
        })
    }
    onChangeAttendanceId(e) {
        this.setState({
            attendance_id: e.target.value
        });
      }
    
      onChangeStudentOfCourse(e) {
        this.setState({
            student_of_course_id: e.target.value
        });
      }
      onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
      }
      onChangeDateCheck(e) {
        this.setState({
            date_check: e.target.value
        });
      }
      saveAttendance() {
        var data = {
            attendance_id: this.state.attendance_id,
            student_of_course_id: this.state.student_of_course_id,
            status: this.state.status,
            date_check: this.state.date_check,
           
           
        }; 
        AttendanceDataService.create(data)
          .then(response =>  {
            this.setState({
                attendance_id: response.data.attendance_id,
                student_of_course_id: response.data.student_of_course_id,
                status: response.data.status,
                date_check: response.data.date_check,
              
              submitted: true,          
            },() => {this.loadAttendanceList()});
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

      openEditAttendance = (id) => {
          
        AttendanceDataService.getbyid(id).then(response => {
            this.setState({
                attendance_id: response.data.attendance_id,
                student_of_course_id: response.data.student_of_course_id,
                status: response.data.status,
                date_check: response.data.date_check,
                visibleRight: true,
                add:false
            })
        })
    }
    updateAttendance(id){    
        var data = {
            attendance_id: this.state.attendance_id,
            student_of_course_id: this.state.student_of_course_id,
            status: this.state.status,
            date_check: this.state.date_check,
           
        }; 
        AttendanceDataService.update(id,data)
          .then(response =>  {
            this.setState({
                attendance_id: response.data.attendance_id,
                student_of_course_id: response.data.student_of_course_id,
                status: response.data.status,
                date_check: response.data.date_check,
              submitted: true,          
            },() => {this.loadAttendanceList()});
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
      deleteAttendance=(id)=>{    
        AttendanceDataService.delete(id)
          .then(() => {this.loadAttendanceList()})
          .catch(e => {
            console.log(e);
          });
      }
    actionTemplate=(rowData, column) =>{
        return ( 
        <React.Fragment>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning"  onClick={(e) => this.openEditAttendance(rowData.attendance_id)} />
            <Button icon="pi-md-close" className="p-button-danger" style={{ 'float': 'right' }} onClick={(e) => this.deleteNotify.delete(rowData.attendance_id)} />
            </React.Fragment>
        );
    }

    

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus" onClick={() => this.setState({visibleRight: true})}></Button>;


        return (
            <div className="p-grid">
                   <Growl ref={(el) => this.growl = el} />
                 <DeleteNotification ref={el => this.deleteNotify = el} accessDelete={(e) => this.deleteAttendance(e)}
                />
                <div className="p-col-12">
                {   this.state.isAdmin ?
                    <div className="card card-w-title datatable-demo">
                        <h1>Students List</h1>
                        <DataTable value={this.state.attendances} header="Students List" paginator={true} rows={10}
                                   responsive={true} >
                            <Column field="attendance_id" header="Attendance ID" sortable={true} />
                            <Column field="student_of_course_id" header="Student Of Course ID" sortable={true} />
                            <Column field="status" header="Status" sortable={true} />
                            <Column field="date_check" header="Date Check" sortable={true} />
                           
                            <Column header={actionHeader} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div> : <Access/>
                }               
                </div>         
                {this.state.add ?
                <div>
                <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false})} style={{width: '30%'}}>
                    <h1 style={{fontWeight:'normal'}}>Add Attendance</h1>
                        <div>
                            <h3>Attendance ID</h3><br/>
                            <InputText value={this.state.attendance_id} onChange={this.onChangeAttendanceId} id="attendance_id" name="attendance_id" /> <br/>
                            <h3>Student Of Course ID</h3><br/>
                            <InputText value={this.state.student_of_course_id} onChange={this.onChangeStudentOfCourse} id="student_of_course_id" name="student_of_course_id" /> <br/>
                            <h3>Status</h3><br/>
                            <InputText value={this.state.status} onChange={this.onChangeStatus} id="status" name="status" /> <br/>
                            <h3>Datetime check</h3><br/>
                            <InputText value={this.state.date_check} onChange={this.onChangeDateCheck} id="date_check" name="date_check" /> <br/>
                           
                           
                    <br/>
                    <Button type="button" onClick={this.saveAttendance} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false,add:false})} label="Close" className="p-button-secondary"/>
               </div> </Sidebar>
            </div>:
            <div>
            <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false,add:true})} style={{width: '30%'}}>
                <h1 style={{fontWeight:'normal'}}>Edit Attendance</h1>
                    <div>
                    <h3>Attendance ID</h3><br/>
                            <InputText value={this.state.attendance_id} onChange={this.onChangeAttendanceId} id="attendance_id" name="attendance_id" /> <br/>
                            <h3>Student Of Course ID</h3><br/>
                            <InputText value={this.state.student_of_course_id} onChange={this.onChangeStudentOfCourse} id="student_of_course_id" name="student_of_course_id" /> <br/>
                            <h3>Status</h3><br/>
                            <InputText value={this.state.status} onChange={this.onChangeStatus} id="status" name="status" /> <br/>
                            <h3>Datetime check</h3><br/>
                            <InputText value={this.state.date_check} onChange={this.onChangeDateCheck} id="date_check" name="date_check" /> <br/>
                           
                    </div>
                <br/>
                <Button type="button" onClick={(e) => this.updateAttendance(this.state.attendance_id)} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                <Button type="button" onClick={(e) => this.setState({visibleRight: false,add:true})} label="Close" className="p-button-secondary"/>
            </Sidebar>
        </div>
            }
            </div>
                      
        );
    }
}
