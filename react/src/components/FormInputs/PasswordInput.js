import React from "react";

export default function PasswordInput({ value, setValue }) {

   return (
    <div>
        Password
        <input
            value={value}
            onChange={event => setValue(event.target.value)}
            type="password"
        ></input>
    </div>
  );
}