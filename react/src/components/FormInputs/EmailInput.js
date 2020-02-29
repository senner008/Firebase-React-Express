import React from "react";

function EmailInput({ value, setValue }) {

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

function areEqual (prev, next) {
  return prev.value === next.value
}

export default React.memo(EmailInput, areEqual)