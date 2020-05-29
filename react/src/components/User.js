import React from "react";
import "../css/user.css";
import moment from "moment";

export default function User({ user_name, user_created_at, user_time_to_live }) {
  return (
    <>
      <li className="user">
        <div>
          <span>Name</span>: {user_name}
        </div>
        <div>
          <span>Created</span>: {moment(user_created_at).format("LLL")}
        </div>
        <div>
          <span>Time to live</span>: {moment(user_time_to_live).format("LLL")}
        </div>
      </li>
    </>
  );
}
