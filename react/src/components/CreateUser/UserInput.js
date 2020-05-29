import React, { useState } from "react";
import HistoryAction from "../historyAction";
import { withRouter } from "react-router-dom";

function UserInput({ submitTodo, submitResponse, history }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const onNameChange = (e) => setName(e.target.value);

  const onDateChange = (e) => setDate(e.target.value);

  const submit = async (e, name, date) => {
    e.preventDefault();
    await submitTodo(name, date);
    submitResponse();
  };

  return (
    <form onSubmit={(e) => submit(e, name, date)}>
      <div className="form-group">
        <label htmlFor="name">User name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Time to live</label>
        <input
          type="datetime"
          className="form-control"
          name="date"
          id="date"
          value={date}
          onChange={onDateChange}
        />
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={HistoryAction(history).goToMain}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
export default withRouter(UserInput);
