import React, { Component } from 'react';
import {DataTable, Column} from 'primereact/datatable';
import {getToken} from '../utils/Common'
import axios from 'axios';
import {Button} from 'primereact/button'
import Access from '../pages/Access'


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
        this.AttendanceService = new AttendanceService();
    }

    componentDidMount() {
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

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning"/>
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
                        <DataTable value={this.state.attendances} header="Students List" paginator={true} rows={10}
                                   responsive={true} >
                            <Column field="attendance_id" header="Attendance ID" sortable={true} filter={true} />
                            <Column field="student_of_course_ids" header="Student Of Course ID" sortable={true} filter={true} />
                            <Column field="status" header="Status" sortable={true} filter={true}/>
                            <Column field="date_check" header="Date Check" sortable={true} filter={true} />
                           
                            <Column header={actionHeader} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div> : <Access/>
                }               
                </div>         
            </div>            
        );
    }
}
