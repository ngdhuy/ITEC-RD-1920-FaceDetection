import React, { Component } from 'react';
import {DataTable, Column} from 'primereact/datatable';
import {getToken} from '../utils/Common'
import axios from 'axios';
import {Button} from 'primereact/button'
import Access from '../pages/Access'
import AccountDataService from '../service/AccountService'
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';

import { DeleteNotification } from '../components/DeleteNotification';
import { Growl } from 'primereact/growl';
export class AccountService extends Component {
    getAccount() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/account', {'headers': {'Authorization': AuthStr}})            
    };
}

export class AccountTable extends Component {

    constructor(props) {
        super(props);
        this.onChangeAccountID = this.onChangeAccountID.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeAccountType = this.onChangeAccountType.bind(this);
        this.onChangeTeacherID = this.onChangeTeacherID.bind(this);
        this.saveAccount = this.saveAccount.bind(this);
        this.state = { 
            isAdmin: true,
            visibleRight: false,
            account_id:"",
            username:"",
            password:"",
            account_type:"",
            teacher_id:""
        };
        this.AccountService = new AccountService();
    }

    componentDidMount() {
        this.loadAccountList()
    }

    loadAccountList = () => {
        this.AccountService.getAccount()
        .then(res => res.data)
        .then(data => { this.setState({accounts: data})})
        .catch(error => {
            this.setState({
                isAdmin: false
            })
        })
    }
    onChangeAccountID(e) {
        this.setState({ account_id: e.target.value });
    }
    onChangeUserName(e) {
        this.setState({ username: e.target.value });
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    onChangeAccountType(e) {
        this.setState({ account_type: e.target.value });
    }
    onChangeTeacherID(e) {
        this.setState({ teacher_id: e.target.value });
    }
    saveAccount() {
        var data = {
            account_id: this.state.account_id,
            username: this.state.username,
            password: this.state.password,
            account_type: this.state.account_type,
            teacher_id: this.state.teacher_id
        };
    
        AccountDataService.create(data)
            .then(res => res.data)
            .then(data => {
                if(data){
                    this.setState({
                        account_id:"",
                        username:"",
                        password:"",
                        account_type:"",
                        teacher_id:"",
                        visibleRight: false  
                    }, () => {this.loadAccountList()})
                }
            })
                .catch(e => {
                if (e) { this.setState({ isAdmin: false }) }
                });
            }

            openEditStudent = (id) => {
          
                StudentDataService.getbyid(id).then(response => {
                    this.setState({
                        student_id: response.data.student_id,
                        name: response.data.name,
                        class_id: response.data.class_id,
                        email: response.data.email,
                        phone: response.data.phone,
                        gender: response.data.gender,
                        visibleRight: true,
                        add:false
                    })
                })
            }
            updateStudent(id){    
                var data = {
                    student_id: this.state.student_id,
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    gender: this.state.gender,
                    class_id: this.state.class_id
                   
                }; 
                StudentDataService.update(id,data)
                  .then(response =>  {
                    this.setState({
                        student_id: response.data.student_id,
                        name: response.data.name,
                        class_id: response.data.class_id,
                        email: response.data.email,
                        phone: response.data.phone,
                        gender: response.data.gender,
                      submitted: true,          
                    },() => {this.loadStudentList()});
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
              deleteStudent=(id)=>{    
                StudentDataService.delete(id)
                  .then(() => {this.loadStudentList()})
                  .catch(e => {
                    console.log(e);
                  });
              }
            actionTemplate=(rowData, column) =>{
                return ( 
                <React.Fragment>
                    <Button type="button" icon="pi-md-pencil" className="p-button-warning"  onClick={(e) => this.openEditStudent(rowData.student_id)} />
                    <Button icon="pi-md-close" className="p-button-danger" style={{ 'float': 'right' }} onClick={(e) => this.deleteNotify.delete(rowData.student_id)} />
                    </React.Fragment>
                );
            }
        

    render() {

        let actionHeader = <Button type="button" onClick={() => {this.setState({visibleRight: true})}} icon="pi-md-plus"/>;

        return (
            <div className="p-grid">
                <div className="p-col-12">
                    {   this.state.isAdmin ? 
                        <div className="card card-w-title datatable-demo">
                            <h1>Accounts List</h1>
                            <DataTable value={this.state.accounts} header="Accounts List" paginator={true} rows={10}
                                    responsive={true} >
                                <Column field="account_id" header="Accound ID" sortable={true} />
                                <Column field="username" header="User Name" sortable={true} />
                                <Column field="teacher_id" header="Teacher ID" sortable={true} />
                                <Column field="account_type" header="Account Type" sortable={true} />
                                <Column header={actionHeader} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                            </DataTable>
                        </div> : <Access/>
                    }                    
                </div>
                <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false})} style={{width: '30%'}}>
                    <h1 style={{fontWeight:'normal'}}>Register new Account</h1>
                        <div>
                            <h3>Account ID</h3><br/>
                            <InputText value={this.state.account_id} onChange={this.onChangeAccountID} id="account_id" name="account_id" /> <br/>
                            <h3>User Name</h3><br/>
                            <InputText value={this.state.username} onChange={this.onChangeUserName} id="username" name="username" /> <br/>
                            <h3>Password</h3><br/>
                            <InputText value={this.state.password} onChange={this.onChangePassword} id="password" name="password" /> <br/>
                            <h3>Account Type</h3><br/>  
                            <InputText value={this.state.account_type} onChange={this.onChangeAccountType} id="account_type" name="account_type" /> <br/>
                            <h3>Teacher ID</h3><br/>
                            <InputText value={this.state.teacher_id} onChange={this.onChangeTeacherID} id="teacher_id" name="teacher_id" /> <br/>
                        </div>
                    <br/>
                    <Button type="button" onClick={this.saveAccount} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false})} label="Close" className="p-button-secondary"/>
                </Sidebar>
            </div>
            
        );
    }
}
