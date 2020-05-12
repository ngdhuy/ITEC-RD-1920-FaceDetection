import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import { useHistory } from "react-router-dom";





export class StudentService extends Component {
    getStudent() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/student', { 'headers': { 'Authorization': AuthStr } })
    }
}
 class StudentAddService extends Component  {
    addStudent(data) {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.post('http://huy.fromlabs.com/api/student',data, { 'headers': { 'Authorization': AuthStr } })
    }
}
export default new StudentAddService();
export class StudentTable extends Component {

    constructor(props) {
        super(props);
        this.state = { isAdmin: true };
        this.StudentService = new StudentService();
        this.StudentAddService = new StudentAddService();
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
    delete() {
        this.StudentDeleteService.deleteStudent()
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

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning" />
            <Button type="button" onclick={this.delete} icon="pi pi-times" className="p-button-danger" />
        </div>;
    }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus"></Button>;

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
            </div>
        );
    }
}
