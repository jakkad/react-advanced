import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>you have clicked the button {count} times</p>
      <button className="btn" type="button" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default UseStateBasics;
