import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import ClassDataService from "../service/ClassService";
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';
import { DeleteNotification } from '../components/DeleteNotification';
import { Growl } from 'primereact/growl';



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
            submitted: false,
            add:true
         };       
        this.ClassService = new ClassService();       
    }

    componentDidMount(e) {
       this.loadClassList()
    }
    loadClassList = () => {
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

    openEditClass = (id) => {
          
            ClassDataService.getbyid(id).then(response => {
                this.setState({
                    class_id: response.data.class_id,
                    class_name: response.data.class_name,
                    total: response.data.total,
                   
                    visibleRight: true,
                    add:false
                })
            })
        }
        updateClass(id){    
            var data = {
                class_id: this.state.class_id,
                class_name: this.state.class_name,
                total: this.state.total   
               
            }; 
            ClassDataService.update(id,data)
              .then(response =>  {
                this.setState({
                    class_id: response.data.class_id,
                    class_name: response.data.class_name,
                    total: response.data.total,
                   
                  submitted: true,          
                },() => {this.loadClassList()});
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

          Class=(id)=>{    
            ClassDataService.delete(id)
              .then(() => {this.loadClassList()})
              .catch(e => {
                console.log(e);
              });
          }
        actionTemplate=(rowData, column) =>{
            return ( 
            <React.Fragment>
                <Button type="button" icon="pi-md-pencil" className="p-button-warning"  onClick={(e) => this.openEditClass(rowData.class_id)} />
                <Button icon="pi-md-close" className="p-button-danger" style={{ 'float': 'right' }} onClick={(e) => this.deleteNotify.delete(rowData.class_id)} />
                </React.Fragment>
            );
        }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus" onClick={() => this.setState({visibleRight: true})} />;

        return (
            <div className="p-grid">
                <Growl ref={(el) => this.growl = el} />
                 <DeleteNotification ref={el => this.deleteNotify = el} accessDelete={(e) => this.deleteClass(e)}
                />
                 <Button icon="pi-md-close" className="p-button-danger" style={{ 'float': 'right' }} onClick={(e) => this.deleteNotify.delete(6)} />
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
                {this.state.add ?
                <div>
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
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false,add:false})} label="Close" className="p-button-secondary"/>
                </Sidebar>
                </div>:
            <div>
                 <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false,add:true})} style={{width: '30%'}}>
                    <h1 style={{fontWeight:'normal'}}>Eidt Class</h1>
                        <div>
                            <h3>Class ID</h3><br/>
                            <InputText value={this.state.class_id} onChange={this.onChangeClassID} id="class_id" name="class_id" /> <br/>
                            <h3>Class Name</h3><br/>
                            <InputText value={this.state.class_name} onChange={this.onChangeClassName} id="class_name" name="class_name" /> <br/>
                            <h3>Total Students</h3><br/>
                            <InputText value={this.state.total} onChange={this.onChangeTotal} id="total" name="total" /> <br/>
                        </div>
                    <br/>
                    <Button type="button" onClick={(e) => this.updateClass(this.state.class_id)} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false,add:true})} label="Close" className="p-button-secondary"/>
                </Sidebar>
            </div>
            }
            </div>
        );
    }
}

