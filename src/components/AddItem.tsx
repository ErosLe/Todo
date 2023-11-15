import React, { useRef } from "react";
type NewTodo = {
  set: (todoText: string) => void;
};
const AddItem: React.FC<NewTodo> = (props) => {
  const reference = useRef<HTMLInputElement>(null);

  const handler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredValue = reference.current!.value;
    props.set(enteredValue);
    reference.current!.value = "";
  };

  return (
    <form onSubmit={handler}>
      <div style={{ color: "red" }}>
        <p style={{ color: "white" }}>Új feladat hozzáadása</p>
        <label htmlFor="text-todo"></label>
        <input type="text" id="text-todo" ref={reference}></input>
      </div>
      <button type="submit" style={{ margin: "10px" }}>
        Submit
      </button>
    </form>
  );
};

export default AddItem;
