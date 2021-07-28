import React, { Component } from "react";
import Student from "./student";
import Form from "../form/Form";
import _ from "lodash";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          fullName: "Tran Van A",
          class: "1A",
        },
        {
          id: 2,
          fullName: "Tran Van B",
          class: "1B",
        },
        {
          id: 3,
          fullName: "Tran Van C",
          class: "1C",
        },
      ],
      formShow: false,
      studentToPass: {
        id: null,
        fullName: "",
        class: "",
      },
      isFormBlank: true,
    };
  }

  handleUpdateClick = (event, student) => {
    this.setState({
      formShow: true,
      studentToPass: {
        id: student.id,
        fullName: student.fullName,
        class: student.class,
      },
      isFormBlank: false,
    });
  };
  handleDeleteClick = (event, student) => {
    var index = _.findIndex(this.state.students, { id: student.id });
    var newArr = [...this.state.students];
    newArr.pop(index);
    this.setState({
      students: newArr,
    });
  };

  handleUpdateStudent = (student) => {
    var index = _.findIndex(this.state.students, { id: student.id });
    var newArr = [...this.state.students];
    newArr.pop(index);
    newArr.push(student);
    this.setState({
      students: newArr,
      formShow: false,
    });
  };

  handleAddStudent = (student) => {
    var newArr = [...this.state.students];
    student.id = this.state.students.length + 1;
    newArr.push(student);
    console.log(newArr);
    this.setState({
      students: newArr,
      formShow: false,
    });
  };

  handleAddClick = (event) => {
    event.preventDefault();
    this.setState({
      formShow: true,
      isFormBlank: true,
    });
  };

  render() {
    const listItems = this.state.students.map((student) => (
      <li key={student.id}>
        <button onClick={(event) => this.handleUpdateClick(event, student)}>
          Edit student No. {student.id}
        </button>{" "}
        <button onClick={(event) => this.handleDeleteClick(event, student)}>
          Delete student No. {student.id}
        </button>
        <Student fullName={student.fullName} class={student.class} />
      </li>
    ));
    return (
      <div>
        {listItems}
        {this.state.formShow ? (
          !this.state.isFormBlank ? (
            <Form
              student={this.state.studentToPass}
              isFormBlank={this.state.isFormBlank}
              handleUpdateStudent={this.handleUpdateStudent}
            />
          ) : (
            <Form
              isFormBlank={this.state.isFormBlank}
              handleAddStudent={this.handleAddStudent}
            />
          )
        ) : (
          <button onClick={this.handleAddClick}>Add new student</button>
        )}
      </div>
    );
  }
}
export default ListItem;
