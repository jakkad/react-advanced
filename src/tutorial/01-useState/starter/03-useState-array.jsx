import { data } from "../../../data.js";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPerson] = useState(data);
  function removeItem(id) {
    const filteredList = people.filter((person) => {
      return person.id !== id;
    });
    setPerson(filteredList);
  }
  function clearAll() {
    setPerson([]);
  }
  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              className="btn"
              type="button"
              onClick={() => removeItem(person.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn btn-red" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
