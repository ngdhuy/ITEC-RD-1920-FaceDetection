import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import ClassDataService from "../service/ClassService";
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';



export class ClassService extends Component {
    getClass() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/class', { 'headers': { 'Authorization': AuthStr } })
    }
}

export class ClassTable extends Component {

    constructor(props) {
        super(props);
        this.onChangeClassID = this.onChangeClassID.bind(this);
        this.onChangeClassName = this.onChangeClassName.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.saveClass = this.saveClass.bind(this);
        this.state = { 
            isAdmin: true,
            visibleRight: false,
            class_id:"",
            class_name:"",
            total:"",
            submitted: false
         };       
        this.ClassService = new ClassService();       
    }

    componentDidMount(e) {
        this.ClassService.getClass()
            .then(res => res.data)
            .then(data => { this.setState({ classes: data }) })
            .catch(error => {
                if (error) {
                    this.setState({
                        isAdmin: false
                    })
                }
            })
    }
    onChangeClassID(e) {
        this.setState({
            class_id: e.target.value
        });
      }
    
    onChangeClassName(e) {
        this.setState({
            class_name: e.target.value
        });
      }
    onChangeTotal(e) {
        this.setState({
            total: e.target.value
        });
    }
    saveClass() {
        var data = {
            class_id: this.state.class_id,
            class_name: this.state.class_name,
            total: this.state.total        
        };
    
        ClassDataService.create(data)
            .then(response =>  {
                this.setState({
                    class_id: response.data.class_id,
                    class_name: response.data.class_name,
                    total: response.data.total,
                    submitted: true          
                });
                console.log(response.data);
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
                            <h1>Class List</h1> 
                            <DataTable value={this.state.classes} ref={(el) => this.dt = el} selectionMode="single" header="Class List" paginator={true} rows={10}
                                responsive={true} >   
                                <Column field="class_id" header="Class ID" sortable={true}  />
                                <Column field="class_name" header="Class Name" sortable={true}  />
                                <Column field="total" header="Total Students" sortable={true}  />
                                <Column header={actionHeader} body={this.actionTemplate} style={{ textAlign: 'center', width: '8em' }} />
                            </DataTable>
                        </div> : <Access />
                    }
                </div>
                <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false})} style={{width: '30%'}}>
                    <h1 style={{fontWeight:'normal'}}>Add New Class</h1>
                        <div>
                            <h3>Class ID</h3><br/>
                            <InputText value={this.state.class_id} onChange={this.onChangeClassID} id="class_id" name="class_id" /> <br/>
                            <h3>Class Name</h3><br/>
                            <InputText value={this.state.class_name} onChange={this.onChangeClassName} id="class_name" name="class_name" /> <br/>
                            <h3>Total Students</h3><br/>
                            <InputText value={this.state.total} onChange={this.onChangeTotal} id="total" name="total" /> <br/>
                        </div>
                    <br/>
                    <Button type="button" onClick={this.saveClass} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Close" className="p-button-secondary"/>
                </Sidebar>
            </div>
        );
    }
}

