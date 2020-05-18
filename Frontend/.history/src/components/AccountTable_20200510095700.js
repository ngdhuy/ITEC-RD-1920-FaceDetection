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
        </div>;
    }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus"/>;

        return (
           
    }
}
