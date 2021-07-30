import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.student ? this.props.student.id : "",
      fullName: this.props.student ? this.props.student.fullName : "",
      class: this.props.student ? this.props.student.class : "",
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  updateValue = (event, type) => {
    if (type === "id") {
      this.setState({ id: event.target.value });
    } else if (type === "fullName") {
      this.setState({ fullName: event.target.value });
    } else {
      this.setState({ class: event.target.value });
    }
  };

  handleUpdate = (event) => {
    event.preventDefault();
    const studentToUpdate = {
      id: this.state.id,
      fullName: this.state.fullName,
      class: this.state.class,
    };
    this.props.handleUpdateStudent(studentToUpdate);
  };

  handleAdd = (event) => {
    event.preventDefault();
    const studentToAdd = {
      id: this.state.id,
      fullName: this.state.fullName,
      class: this.state.class,
    };
    this.props.handleAddStudent(studentToAdd);
  };

  render() {
    return (
      <div className="popup-box">
        <div className="box">
          {!this.props.isFormBlank ? <h1>UPDATE FORM</h1> : <h1>ADD FORM</h1>}
          <span className="close-icon" onClick={this.props.handleClose}>
            x
          </span>
          <form>
            <input
              type="text"
              placeholder="ID"
              value={this.state.id}
              onChange={(event) => this.updateValue(event, "id")}
              readOnly
            ></input>

            <input
              type="text"
              placeholder="Full name"
              value={this.state.fullName}
              onChange={(event) => this.updateValue(event, "fullName")}
            ></input>

            <input
              type="text"
              placeholder="Class"
              value={this.state.class}
              onChange={(event) => this.updateValue(event, "class")}
            ></input>
          </form>
          {!this.props.isFormBlank ? (
            <button className="btn1" onClick={this.handleUpdate}>
              Edit student
            </button>
          ) : (
            <button className="btn1" onClick={this.handleAdd}>
              Add student
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
