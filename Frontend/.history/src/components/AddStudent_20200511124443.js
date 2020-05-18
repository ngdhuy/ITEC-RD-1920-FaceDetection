import React, { Component } from "react";
import StudentAddService from "./StudentTable";
import Access from '../pages/Access'

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onChangeClassID = this.onChangeClassID.bind(this);
    this.onChangeStudentName=this.onChangeStudentName.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    
    this.state = {
       
     isAdmin: true ,
      student_id: null,
      student_name: "",
      class_id : "",
      submitted: false
    };
  }

  onChangeStudentID(e) {
    this.setState({
        student_id: e.target.value
    });
  }

  onChangeStudentName(e) {
    this.setState({
        student_name: e.target.value
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
        student_name: this.state.student_name,
        class_id: this.state.class_id
       
    };

    StudentAddService.addStudent(data)
      .then(response =>  {
        this.setState({
            student_id: response.data.student_id,
            student_name: response.data.student_name,
            class_id: response.data.class_id,
          submitted: true,
          
        });
        
      })
      .catch(e => {
        if (e) {
            this.setState({
                isAdmin: false
            })
        }
      });
  }

  newTutorial() {
    this.setState({
      student_id: "",
      student_name: "",
      class_id:"",
      submitted: false
    });
  }

  render() {
    return (
        
       <div>
           {this.state.isAdmin ?
      <div className="submit-form">
          
       
          <div>
              
            <div className="form-group">
              <label htmlFor="student_id">Student ID</label>
              <input
                type="text"
                className="form-control"
                id="student_id"
                required
                value={this.state.student_id}
                onChange={this.onChangeStudentID}
                name="student_id"
              />
            </div>

            <div className="form-group">
              <label htmlFor="student_name">Student Name</label>
              <input
                type="text"
                className="form-control"
                id="student_name"
                required
                value={this.state.student_name}
                onChange={this.onChangeStudentName}
                name="student_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="class_id">Class ID</label>
              <input
                type="text"
                className="form-control"
                id="class_id"
                required
                value={this.state.class_id}
                onChange={this.onChangeClassID}
                name="class_id"
              />
              
            </div>
            <button onClick={this.saveStudent} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>: <Access />
        }
      </div> 
        
    );
  }
}