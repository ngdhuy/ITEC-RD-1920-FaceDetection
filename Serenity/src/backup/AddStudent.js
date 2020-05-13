import React, { Component } from "react";
// import StudentAddService from "./StudentTable";
import Access from '../pages/Access'
import StudentDataService from "../service/StudentService";

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
      student_id: "",
      name: "",
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

  newTutorial() {
    this.setState({
      student_id: "",
      name: "",
      class_id:"",
      submitted: false
    });
  }

  render() {
    return (
        
       <div>
           {this.state.isAdmin ?
      <div className="submit-form">
          
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
            
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
              <label htmlFor="name">Student Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeStudentName}
                name="name"
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