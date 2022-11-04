import "./styles.css";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const initItems = [...Array(3)].map(faker.name.firstName);

export default function App() {
  const [items, setItems] = useState(initItems);
  const [sorted, setSorted] = useState(false);
  const handleAdd = () => {
    const name = faker.name.firstName();
    setItems([name, ...items]);
  };
  const handleRemove = () => {
    const [, ...rest] = items;
    setItems(rest);
  };
  const handleSort = () => {
    setSorted(!sorted);
  };
  const sort = (a, b) => {
    if (!sorted) {
      return 0;
    }
    return a.localeCompare(b);
  };
  const handleReset = () => {
    setItems(initItems);
  };
  return (
    <div className="App">
      <div className="buttons">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        <button onClick={handleSort}>Sort</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {[...items].sort(sort).map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
