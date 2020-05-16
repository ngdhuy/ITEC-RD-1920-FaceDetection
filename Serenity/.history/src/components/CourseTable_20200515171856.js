import React, { Component } from 'react';
import {DataTable, Column} from 'primereact/datatable';
import {getToken} from '../utils/Common'
import axios from 'axios';
import {Button} from 'primereact/button'
import Access from '../pages/Access'
import CourseDataService from "../service/CourseService";
import {Sidebar} from 'primereact/sidebar';
import {InputText} from 'primereact/inputtext';
import { DeleteNotification } from '../components/DeleteNotification';
import { Growl } from 'primereact/growl';
export class CourseService extends Component {
    getCourse() {
        const token = getToken();
        const AuthStr = 'Bearer '.concat(token)
        return axios.get('https://huy.fromlabs.com/api/course', {'headers': {'Authorization': AuthStr}})
    }
}

export class CourseTable extends Component {

    constructor(props) {
        super(props);
        this.onChangeCourseID = this.onChangeCourseID.bind(this);
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeCourseStartDate=this.onChangeCourseStartDate.bind(this);
        this.onChangeCourseEndDate=this.onChangeCourseEndDate.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.state = { 
            isAdmin: true,
            visibleRight: false,
            course_id:"",
            course_name:"",
            course_start_date:"2000/1/1",
            course_end_date:"2000/1/1" ,
            add:true
        };
        this.CourseService = new CourseService();
    }

    componentDidMount() {
        this.loadCourseList()
    }
    loadCourseList = () => {
        this.CourseService.getCourse()
        .then(res => res.data)
        .then(data => {this.setState({courses: data})})
        .catch(error => {
            this.setState({
                isAdmin: false
            })
        })
    }
    onChangeCourseID(e) {
        this.setState({
            course_id: e.target.value
        });
    }    
    onChangeCourseName(e) {
        this.setState({
            course_name: e.target.value
        });
    }
    onChangeCourseStartDate(e) {
        this.setState({
            course_start_date: e.target.value
        });
    }
    onChangeCourseEndDate(e) {
        this.setState({
            course_end_date: e.target.value
        });
    }
    saveCourse() {
        var data = {
            course_id: this.state.course_id,
            course_name: this.state.course_name,
            course_start_date: this.state.course_start_date,
            course_end_date: this.state.course_end_date
        };
        CourseDataService.create(data)
            .then(response =>  {
                this.setState({
                    course_id: response.data.course_id,
                    course_name: response.data.course_name,
                    course_start_date: response.data.course_start_date,
                    course_end_date: response.data.course_end_date,
                    submitted: true
                },()=>{this.loadCourseList()});
                console.log(response.data);
            })
            .catch(e => {
                if (e) { this.setState({ isAdmin: false })}
            });
    };
    openEditCourse = (id) => {
          
        CourseDataService.getbyid(id).then(response => {
            this.setState({
                    course_id: response.data.course_id,
                    course_name: response.data.course_name,
                    course_start_date: response.data.course_start_date,
                    course_end_date: response.data.course_end_date,
                    submitted: true,
                visibleRight: true,
                add:false
            })
        })
    }
    updateCourse(id){    
        var data = {
            course_id: this.state.course_id,
            course_name: this.state.course_name,
            course_start_date: this.state.course_start_date,
            course_end_date: this.state.course_end_date,
           
           
        }; 
        CourseDataService.update(id,data)
          .then(response =>  {
            this.setState({
                course_id: response.data.course_id,
                course_name: response.data.course_name,
                course_start_date: response.data.course_start_date,
                course_end_date: response.data.course_end_date,
              submitted: true,          
            },()=>{this.loadCourseList()});
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
      deleteCourse=(id)=>{    
        CourseDataService.delete(id)
          .then(()=>{this.loadCourseList()}
          )
          .catch(e => {
            console.log(e);
          });
      }
    actionTemplate=(rowData, column)=> {
        return  <React.Fragment>
            <Button type="button" icon="pi-md-pencil" className="p-button-warning"  onClick={(e) => this.openEditCourse(rowData.course_id)} />
            <Button icon="pi-md-close" className="p-button-danger" style={{ 'float': 'right' }} onClick={(e) => this.deleteNotify.delete(rowData.course_id)} />
            </React.Fragment>
    }  

    render() {

        let actionHeader = <Button type="button" onClick={() => this.setState({visibleRight: true})} icon="pi-md-plus"/>;

        return (
            <div className="p-grid">
                  <Growl ref={(el) => this.growl = el} />
                 <DeleteNotification ref={el => this.deleteNotify = el} accessDelete={(e) => this.deleteCourse(e)}
                />
                <div className="p-col-12">
                {    this.state.isAdmin ?
                    <div className="card card-w-title datatable-demo">
                        <h1>Courses List</h1>
                        <DataTable value={this.state.courses} header="Courses List" paginator={true} rows={10}
                                   responsive={true}  selectionMode="single"selection={this.state.selected} onSelectionChange={e => this.setState({selected: e.value})}>
                            <Column field="course_id" header="Course ID" sortable={true} />
                            <Column field="course_name" header="Course Name" sortable={true} />
                            <Column field="course_start_date" header="Start Date" sortable={true} />
                            <Column field="course_end_date" header="End Date" sortable={true} />
                            <Column header={actionHeader} body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                        </DataTable>
                    </div> : <Access/>
                }
                </div>
                {this.state.add ?
                <div>
                <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000}
                 onHide={(e) => this.setState({visibleRight: false})} style={{width: '30%'}} >
                    <h1 style={{fontWeight:'normal'}}>Add Course</h1>
                        <div>
                            <h3>Course ID</h3><br/>
                            <InputText value={this.state.course_id} onChange={this.onChangeCourseID} id="course_id" name="course_id" /> <br/>
                            <h3>Course Name</h3><br/>
                            <InputText value={this.state.course_name} onChange={this.onChangeCourseName} id="course_name" name="course_name" /> <br/>
                            <h3>Course Start Date</h3><br/>
                            <InputText value={this.state.course_start_date} onChange={this.onChangeCourseStartDate} id="course_start_date" name="course_start_date" /> <br/>
                            <h3>Course End Date</h3><br/>
                            <InputText value={this.state.course_end_date} onChange={this.onChangeCourseEndDate} id="course_end_date" name="course_end_date" /> <br/>
                        </div>
                    <br/>
                    <Button type="button" onClick={this.saveCourse} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false,add:false})} label="Close" className="p-button-secondary"/>
                </Sidebar>
                </div>:
            <div>     
                 <Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000}
                 onHide={(e) => this.setState({visibleRight: false,add:true})} style={{width: '30%'}} >
                    <h1 style={{fontWeight:'normal'}}>Edit Course</h1>
                        <div>
                            <h3>Course ID</h3><br/>
                            <InputText value={this.state.course_id} onChange={this.onChangeCourseID} id="course_id" name="course_id" /> <br/>
                            <h3>Course Name</h3><br/>
                            <InputText value={this.state.course_name} onChange={this.onChangeCourseName} id="course_name" name="course_name" /> <br/>
                            <h3>Course Start Date</h3><br/>
                            <InputText value={this.state.course_start_date} onChange={this.onChangeCourseStartDate} id="course_start_date" name="course_start_date" /> <br/>
                            <h3>Course End Date</h3><br/>
                            <InputText value={this.state.course_end_date} onChange={this.onChangeCourseEndDate} id="course_end_date" name="course_end_date" /> <br/>
                        </div>
                    <br/>
                    <Button type="button" onClick={(e) => this.updateCourse(this.state.course_id)} label="Submit" className="p-button-success"  style={{marginRight:'.25em'}} />
                    <Button type="button" onClick={(e) => this.setState({visibleRight: false,add:true})} label="Close" className="p-button-secondary"/>
                </Sidebar>
                </div>
                }
                </div>    
        );
    }

}
