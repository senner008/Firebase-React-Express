import React from "react";
import "../../css/user.css";
import moment from "moment";

export default function Blob({ name, created_at, last_modified}) {
  return (
    <>
      <li className="user">
        <div>
          <span>Name</span>: {name}
        </div>
        <div>
          <span>Date created</span>: {moment(created_at).format("LLL")}
        </div>
        <div>
          <span>Last modified</span>: {moment(last_modified).format("LLL")}
        </div>
      </li>
    </>
  );
}
