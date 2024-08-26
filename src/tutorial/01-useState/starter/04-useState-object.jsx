import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const showJohn = () => {
    setPerson({
      name: "John",
      age: 30,
      hobby: "Play video Games",
    });
  };
  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h4>{person.age}</h4>
      <h4>Enjoys:{person.hobby}</h4>
      <button className="btn" onClick={showJohn}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
