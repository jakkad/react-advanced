import { data } from "../../../data.js";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const NewPeople = people.filter((person) => {
      return person.id != id;
    });
    setPeople(NewPeople);
  };

  const removeAllItmes = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <button className="btn" onClick={() => removeItem(person.id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={removeAllItmes}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
