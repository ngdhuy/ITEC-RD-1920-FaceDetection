import React, { Component } from "react";
import StudentAddService from "./StudentTable";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      student_id: null,
      student_name: "",
     
      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
        student_id: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
        student_name: e.target.value
    });
  }

  saveStudent() {
    var data = {
        student_id: this.state.student_id,
        student_name: this.state.student_name
    };

    StudentAddService.addStudent()
      .then(response => {
        this.setState({
            student_id: response.data.student_id,
            student_name: response.data.student_name,
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
                value={this.state.title}
                onChange={this.onChangeTitle}
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
                value={this.state.description}
                onChange={this.onChangeDescription}
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