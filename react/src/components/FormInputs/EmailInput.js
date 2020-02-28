import React from "react";

export default function EmailInput({ value, setValue }) {

   return (
    <div>
        Email
        <input
            value={value}
            onChange={event => setValue(event.target.value)}
            type="email"
        ></input>
    </div>
  );
}