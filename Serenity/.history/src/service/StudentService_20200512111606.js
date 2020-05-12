
import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'

class StudentDataService {
   
 

  create(data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.post('https://huy.fromlabs.com/api/student',data, { 'headers': { 'Authorization': AuthStr } })
  }
  getStudent() {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.get('https://huy.fromlabs.com/api/student', { 'headers': { 'Authorization': AuthStr } })
}
  
}

export default new StudentDataService();