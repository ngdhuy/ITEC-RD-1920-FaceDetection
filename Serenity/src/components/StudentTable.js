import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import StudentDataService from "../service/StudentService";
import { withRouter } from 'react-router';
import {Appbreadcrumb} from '../';
import {Sidebar} from 'primereact/sidebar';



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
        this.state = { 
            isAdmin: true,
            visibleRight: false
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
    deleteStudent() {    
        StudentDataService.delete(2)
          .then(response => {
            console.log(response.data);
          
          })
          .catch(e => {
            console.log(e);
          });
      }
    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning" />
            <Button type="button" onClick={this.deleteStudent} icon="pi pi-times" className="p-button-danger" />
        </div>;
    }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus" onClick={() => this.setState({visibleRight: true})}></Button>;


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
                    <h1 style={{fontWeight:'normal'}}>Add Student Information</h1>
                    
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Save" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Cancel" className="p-button-secondary"/>
                </Sidebar>
            </div>
        );
    }
}

