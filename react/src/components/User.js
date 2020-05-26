import React from "react";
import "../css/user.css";
import moment from "moment";

export default function User({ user_name, user_created_at }) {
  return (
    <>
      <li className="user">
        <div>
          <span>Name</span>: {user_name}
        </div>
        <div>
          <span>Created</span>: {moment(user_created_at).format("LLL")}
        </div>
      </li>
    </>
  );
}
