import React, { useState } from 'react'
import UserInput from './UserInput'
import HistoryAction from "../historyAction"
import ajaxContent from "../../helpers/ajax.js";
import { ajaxUrls } from "../../helpers/ajax.js";


const UserMaker = ({history}) => {

    async function createUser(name) {
        const body = {
            name
        }  
        const response = await ajaxContent(ajaxUrls.createUser, body);
    }

  return (
      <UserInput submitTodo={createUser} history={history} submitResponse={HistoryAction(history).goToMain}/>
  )
}

export default UserMaker