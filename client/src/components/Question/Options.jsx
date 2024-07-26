import React from "react";

function Options({ options }) {
  return (
    <>
      {options.split("\n").map((option, ind) => (
        <div key={ind}>{option}</div>
      ))}
    </>
  );
}

export default Options;
