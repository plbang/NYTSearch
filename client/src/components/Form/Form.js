import React from "react";
import "./Form.css";

const Form = props => (
  <form>
    <div className="form-group">
      <h4>
        <strong>Subject</strong>
      </h4>
      <input
        className="form-control"
        type="text"
        value={props.q}
        name="q"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>Start Year</strong>
      </h4>
      <input
        className="form-control"
        type="number"
        value={props.start_year}
        name="start_year"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>End Year</strong>
      </h4>
      <input
        className="form-control"
        type="number"
        value={props.end_year}
        name="end_year"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn"
      >
        Search
      </button>
    </div>
  </form>
);

export default Form;
