import React, { Component } from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { getToken } from '../utils/Common'
import axios from 'axios';
import { Button } from 'primereact/button'
import Access from '../pages/Access'
import StudentDataService from "../service/StudentService";
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';

import ReactDOM from 'react-dom';   


export class StudentService extends Component {
    getStudent() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/student', { 'headers': { 'Authorization': AuthStr } })
    }
}

export class StudentTable extends Component {

    constructor(props) {
        super(props);
        this.onChangeStudentID = this.onChangeStudentID.bind(this);
        this.onChangeClassID = this.onChangeClassID.bind(this);
        this.onChangeStudentName=this.onChangeStudentName.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
        this.newStudent = this.newStudent.bind(this);

        this.state = { 
            isAdmin: true,
            visibleRight: false,
            student_id: "4",
            name: "",
            class_id : "",
            submitted: false,
         
         };
        
         this.StudentService = new StudentService();
       
    }

    componentDidMount(e) {
        this.StudentService.getStudent()
            .then(res => res.data)
            .then(data => { this.setState({ students: data }) })
            .catch(error => {
                if (error) {
                    this.setState({
                        isAdmin: false
                    })
                }
            })
    }
   

    onChangeStudentID(e) {
        this.setState({
            student_id: e.target.value
        });
      }
    
    onChangeStudentName(e) {
        this.setState({
            name: e.target.value
        });
      }
    onChangeClassID(e) {
        this.setState({
            class_id: e.target.value
        });
      }
    saveStudent() {
        var data = {
            student_id: this.state.student_id,
            name: this.state.name,
            class_id: this.state.class_id
           
        };
    
        StudentDataService.create(data)
          .then(response =>  {
            this.setState({
                student_id: response.data.student_id,
                name: response.data.name,
                class_id: response.data.class_id,
              submitted: true,          
            });
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
    
    newStudent() {
        this.setState({
          student_id: "",
          name: "",
          class_id:"",
          submitted: false
        });
      }

      deleteStudent() {    
        StudentDataService.delete(this.state.student_id)
          .then(response => {
            console.log(response.data);
          
          })
          .catch(e => {
            console.log(e);
          });
      }
    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning" />
           
        </div>;
    }

    render() {

        let actionHeader = <Button type="button" icon="pi-md-plus" onClick={() => this.setState({visibleRight: true})}></Button>;


        return (
            <table className="table table-hover table-bordered">
            <thead>
            <tr>
                <th scope="col"><>Edit</></th>
                <th scope="col"><>#</></th>
                <th scope="col"><>Código</></th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Grado</th>
            </tr>
            </thead>
            <tbody id="cursorPointer">
               {/*Rendering data*/}
                {this.state.students.map(function(item, key) {
                    return (
                        <div>
                        <tr key = {key} >
                          
                            <td><>{item.student_id}</></td>
                            <td><>{item.name}</></td>
                            <td>{item.class_id}</td>
                           
                        </tr>
                        </div>
                    )
                })}
            </tbody>
        </table> 
        );
    }
}
