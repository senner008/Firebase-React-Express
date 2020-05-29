import React, { useContext, useEffect, useState } from "react";
import ajaxContent from "../helpers/ajax.js";
import { ajaxUrls } from "../helpers/ajax.js";
import { UserContext } from "../App.js";
import Loader from "./Loader.js";
import User from "./User.js";

import "../css/user.css";

export default function Main({history}) {
  const user = useContext(UserContext);
  const [content, setContent] = useState([]);
  const [loadingState, setLoadingState] = useState(false);

  var userList;
  if (content) {
    const users = content.map((user) => {
      return (
        <User
          key={user.user_id}
          user_name={user.user_name}
          user_created_at={user.user_created_at}
          user_time_to_live={user.user_time_to_live}
        ></User>
      );
    });
    userList = <ul className="users">{users}</ul>;
  }

  useEffect(() => {
    if (user) {
      (async () => {
        const users = await ajaxContent(ajaxUrls.main, {}, setLoadingState);
        setContent(users);
      })();
    }
  }, [user]);



  return (
    <>
    {
        loadingState 
            ? <Loader /> 
            : userList
    }
    
    </>
    );
}
