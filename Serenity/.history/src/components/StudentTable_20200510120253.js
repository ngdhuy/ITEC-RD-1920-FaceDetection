import React, { Component } from 'react';
import {DataTable, Column} from 'primereact/datatable';
import {getToken} from '../utils/Common'
import axios from 'axios';
import {Button} from 'primereact/button'
import Access from '../pages/Access'


export class StudentService extends Component {
    getStudent() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/student', {'headers': {'Authorization': AuthStr}})
    }
}
export class StudentDeleteService extends Component {
    deleteStudent() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.delete('https://huy.fromlabs.com/api/student', {'headers': {'Authorization': AuthStr}})
    }
}
export class StudentTable extends Component {

    constructor() {
        super();
        this.state = { isAdmin: true };
        this.StudentService = new StudentService();
        this.StudentDeleteService=new StudentDeleteService();
    }

    componentDidMount() {
        this.StudentService.getStudent()
        .then(res => res.data)
        .then(data => { this.setState({students: data})})
        .catch(error => {
            if(error) {
                this.setState({
                    isAdmin: false
                })
            }
        })
    }
    delete(){
        this.StudentDeleteService.deleteStudent()
        .then(res => res.data)
        .then(data => { this.setState({students: data})})
        .catch(error => {
            if(error) {
                this.setState({
                    isAdmin: false
                })
            }
        })
    }
    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning"/>
            <Button type="button" onclick={this.delete} icon="pi pi-times" className="p-button-danger"/>
        </div>;
    }

    

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus"/>;

        return (
            <div className="p-grid">
                <div className="p-col-12">
                {   this.state.isAdmin ?
                    <div className="card card-w-title datatable-demo">
                        <h1>Students List</h1>
                        <DataTable value={this.state.students} header="Students List" paginator={true} rows={10}
                                   responsive={true} >
                            
                        </DataTable>
                    </div> : <Access/>
                }               
                </div>         
            </div>            
        );
    }
}
