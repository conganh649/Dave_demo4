import React from "react";

const Student = (props) => {
  return (
    <div>
      <div>
        <b>Full name: </b>
        {props.fullName}
      </div>
      <div>
        <b>Class: </b>
        {props.class}
      </div>
      <br />
    </div>
  );
};

export default Student;
