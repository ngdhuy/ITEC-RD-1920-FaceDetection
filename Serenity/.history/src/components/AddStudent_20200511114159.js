import React, { Component } from "react";
import StudentAddService from "./StudentTable";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeStudentID = this.onChangeStudentID.bind(this);
    this.onChangeClassID = this.onChangeClassID.bind(this);
    this.onChangeStudentName=this.onChangeStudentName.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.state = { isAdmin: true };
    this.state = {
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
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
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
                id="title"
                required
                value={this.state.student_id}
                onChange={this.onChangeClassID}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="student_name">Student Name</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.student_name}
                onChange={this.onChangeStudentName}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="student_name">Class ID</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.class_id}
                onChange={this.onChangeClassID}
                name="description"
              />
            </div>
            <button onClick={this.saveStudent} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}