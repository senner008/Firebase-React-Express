import React, {useState} from "react";
import HistoryAction from "../historyAction"
import {
  withRouter
} from 'react-router-dom'


function UserInput({submitTodo, submitResponse, history}) {
  console.log(history)
    const [name, setName] = useState('');
  
    const onNameChange = e =>
      setName(e.target.value);


    const submit = async (e, title) => {
      e.preventDefault();
      await submitTodo(name);
      submitResponse();
    }

    return (
      <form onSubmit={(e) => submit(e, name)}>
        <div className="form-group">
          <label htmlFor="title">Title of user</label>
          <input name="title" type="text" className="form-control" id="title" value={name} onChange={onNameChange}/> 
        </div>
        <div className="form-group">
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={HistoryAction(history).goToMain}>Cancel</button>
          </div>
        </div>
      </form>
    )
}
export default withRouter(UserInput)