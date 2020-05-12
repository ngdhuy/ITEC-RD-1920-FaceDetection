import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import StudentAddService from "../service/StudentService";


export class StudentService extends Component {
    getStudent() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/student', { 'headers': { 'Authorization': AuthStr } })
    }
}

export class StudentTable extends Component {

    constructor() {
        super();
        this.state = { isAdmin: true };
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
        StudentAddService.delete(this.state.students.id)
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
            <Button type="button" onclick={this.deleteStudent} icon="pi pi-times" className="p-button-danger" />
        </div>;
    }
    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus" />;

        return (
            <div className="p-grid">
                <div className="p-col-12">
                    {this.state.isAdmin ?
                        <div className="card card-w-title datatable-demo">
                            <h1>Students List</h1>
                            
                            <DataTable value={this.state.students} ref={(el) => this.dt = el} selectionMode="single" header="Students List" paginator={true} rows={10}
                                responsive={true} >
                                
                                <Column field="student_id" header="Student ID" sortable={true} filter={true} />
                                <Column field="name" header="Student Name" sortable={true} filter={true} />
                                <Column field="email" header="Email Address" sortable={true} filter={true} />
                                <Column field="phone" header="Phone Number" sortable={true} filter={true} />
                                <Column field="gender" header="Gender" sortable={true} filter={true} />
                                <Column field="class_id" header="Class ID" sortable={true} filter={true} />
                                <Column header={actionHeader} body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
                            </DataTable>
                        </div> : <Access />
                    }
                </div>
            </div>
        );
    }
}
