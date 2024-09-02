import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  const toggleAlert = () => {
    if (toggle) {
      setToggle(false);
      return;
    }
    setToggle(true);
  };

  return (
    <div>
      <button className="btn" onClick={toggleAlert}>
        Toggle
      </button>
      {toggle && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Error...</div>;
};

export default ToggleChallenge;
