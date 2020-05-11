import React, { Component } from 'react';
import {DataTable, Column} from 'primereact/datatable';
import {getToken} from '../utils/Common'
import axios from 'axios';
import {Button} from 'primereact/button'
import Access from '../pages/Access'


export class AccountService extends Component {
    getAccount() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/account', {'headers': {'Authorization': AuthStr}})            
    };
}

export class AccountTable extends Component {

    constructor() {
        super();
        this.state = { isAdmin: true };
        this.AccountService = new AccountService();
    }

    componentDidMount() {
        this.AccountService.getAccount()
        .then(res => res.data)
        .then(data => { this.setState({accounts: data})})
        .catch(error => {
            this.setState({
                isAdmin: false
            })
        })
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning"/>
            <Button type="button" icon="pi pi -imes" className="p-button-danger"/>
        </div>;
    }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus"/>;

        return (
            <div className="p-grid">
                <div className="p-col-12">
                    {   this.state.isAdmin ? 
                        <div className="card card-w-title datatable-demo">
                            <h1>Accounts List</h1>
                            <DataTable value={this.state.accounts} header="Accounts List" paginator={true} rows={10}
                                    responsive={true} >
                                <Column field="account_id" header="Accound ID" sortable={true} filter={true} />
                                <Column field="username" header="User Name" sortable={true} filter={true} />
                                <Column field="teacher_id" header="Teacher ID" sortable={true} filter={true}/>
                                <Column field="account_type" header="Account Type" sortable={true} filter={true} />
                                <Column header={actionHeader} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                            </DataTable>
                        </div> : <Access/>
                    }                    
                </div>
            </div>
            
        );
    }
}
