import React, { useState } from "react";

const RandomComponent = ({ handleClick }) => {
  return (
    <button onClick={(event) => handleClick(event.target.textContent)}>
      This is the value
    </button>
  );
};

const PassedToThisComponent = ({ clickedvalue }) => {
  // console.log(clickedvalue);
  return (
    <>
      {" "}
      <p>{clickedvalue}</p>
    </>
  );
};

const Test = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <RandomComponent handleClick={(value) => setValue(value)} />
      <PassedToThisComponent clickedvalue={value} />
    </div>
  );
};

export default Test;
