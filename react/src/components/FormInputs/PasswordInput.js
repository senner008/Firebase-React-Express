import React from "react";

function PasswordInput({ value, setValue }) {

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


function areEqual (prev, next) {
  return prev.value === next.value
}

export default React.memo(PasswordInput, areEqual)