import React, { Component } from 'react';
import {DataTable, Column} from 'primereact/datatable';
import {getToken} from '../utils/Common'
import axios from 'axios';
import {Button} from 'primereact/button'
import Access from '../pages/Access'


export class CourseService extends Component {
    getCourse() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/course', {'headers': {'Authorization': AuthStr}})
    }
}

export class CourseTable extends Component {

    constructor() {
        super();
        this.state = { isAdmin: true };
        this.CourseService = new CourseService();
    }

    componentDidMount() {
        this.CourseService.getCourse()
        .then(res => res.data)
        .then(data => {this.setState({courses: data})})
        .catch(error => {
            this.setState({
                isAdmin: false
            })
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
                {    this.state.isAdmin ?
                    <div className="card card-w-title datatable-demo">
                        <h1>Courses List</h1>
                        <DataTable value={this.state.courses} header="Courses List" paginator={true} rows={10}
                                   responsive={true} >
                            <Column field="course_id" header="Course ID" sortable={true} />
                            <Column field="course_name" header="Course Name" sortable={true} />
                            <Column field="course_start_date" header="Start Date" sortable={true} />
                            <Column field="course_end_date" header="End Date" sortable={true} />
                            <Column header={actionHeader} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div> : <Access/>
                }
                </div>
            </div>
            
        );
    }
}
