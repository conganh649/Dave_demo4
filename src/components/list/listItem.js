import React, { Component } from "react";
import _ from "lodash";

import Form from "../form/Form";

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
      count: 3,
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
    newArr.splice(index, 1);
    this.setState({
      students: newArr,
    });
  };

  handleUpdateStudent = (student) => {
    var index = _.findIndex(this.state.students, { id: student.id });
    var newArr = [...this.state.students];
    newArr.splice(index, 1);
    newArr.splice(index, 0, student);
    this.setState({
      students: newArr,
      formShow: false,
    });
  };

  handleAddStudent = (student) => {
    var newArr = [...this.state.students];
    var newID = this.state.count + 1;
    student.id = newID;
    newArr.push(student);
    console.log(newArr);
    this.setState({
      students: newArr,
      formShow: false,
      count: newID,
    });
  };

  handleAddClick = (event) => {
    event.preventDefault();
    this.setState({
      isFormBlank: true,
      formShow: true,
    });
  };

  handleClose = (event) => {
    event.preventDefault();
    this.setState({
      formShow: false,
    });
  };

  renderTable = (students) => (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th colSpan="1">ID</th>
            <th colSpan="1">Full name</th>
            <th colSpan="1">Class</th>
            <th colSpan="1">Action</th>
          </tr>
        </thead>
        {students.map((student) => (
          <tbody key={student.id}>
            <tr>
              <td>{student.id}</td>
              <td>{student.fullName}</td>
              <td>{student.class}</td>
              <td>
                <button
                  className="btn1"
                  onClick={(event) => this.handleUpdateClick(event, student)}
                >
                  Edit
                </button>
                <button
                  className="btn1"
                  onClick={(event) => this.handleDeleteClick(event, student)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );

  render() {
    return (
      <div>
        <div className="container">
          <h1>Demo</h1>
        </div>
        {this.renderTable(this.state.students)}
        {this.state.formShow ? (
          !this.state.isFormBlank ? (
            <Form
              student={this.state.studentToPass}
              isFormBlank={this.state.isFormBlank}
              handleUpdateStudent={this.handleUpdateStudent}
              handleClose={this.handleClose}
            />
          ) : (
            <Form
              isFormBlank={this.state.isFormBlank}
              handleAddStudent={this.handleAddStudent}
              handleClose={this.handleClose}
            />
          )
        ) : (
          <div className="container" style={{ paddingTop: "30px" }}>
            <button className="btn1" onClick={this.handleAddClick}>
              Add new student
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default ListItem;
