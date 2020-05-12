
import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'

class StudentDataService {
   
  getAll() {
    return http.get("/account");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    const token = getToken();
    const AuthStr = 'Bearer '.concat(token)
    return axios.post('https://huy.fromlabs.com/api/student',data, { 'headers': { 'Authorization': AuthStr } })
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new StudentDataService();