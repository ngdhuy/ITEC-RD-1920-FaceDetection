import React, { Component } from "react";
import {StudentAddService} from "./StudentTable";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
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

    StudentAddService.addStudent(data)
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
    // ...
  }
}