import React, { useContext, useRef, useState } from "react";
import ToDoContextProvider, { ToDoContext } from "../Store/todo-context";
import "../Component/NewToDo.style.css";

const NewToDo: React.FC = () => {
  const { item, addTodo } = useContext(ToDoContext);
  const toDoTitleinputRef = useRef<HTMLInputElement>(null);
  const toDoIDinputRef = useRef<HTMLInputElement>(null);
  const [enterTitle, setTitle] = useState("");
  const [enterID, setenterID] = useState(Number);

  const titlehandlerClick = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTitle(event.target.value);
  };
  const IDhandlerClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setenterID(event.target.valueAsNumber);
  };
  const submitHandle = (event: React.FormEvent) => {
    event.preventDefault();

    if (toDoTitleinputRef.current != null && toDoIDinputRef.current != null) {
      const refObje = {
        id: toDoIDinputRef.current?.value,
        title: toDoTitleinputRef.current.value,
      };
      console.log("data in form ", refObje);
      const items = item?.map((element) => {
        return element;
      });
      const newarr = [...items, refObje];
      console.log("new arr", newarr);
      localStorage.setItem("NewTodos", JSON.stringify(newarr));
    }

    // ? check value is assigned to entervalue if not it will assigned null
    //! assigned because we know value will not be null. it will assigned after we submit the form

    addTodo();
    setTitle("");
    setenterID(0);
  };
  return (
    <>
      <form className="Form" onSubmit={submitHandle}>
        <div>
          <div>
            <label htmlFor="id">Task Number</label>
            <input
              onChange={IDhandlerClick}
              value={enterID}
              ref={toDoIDinputRef}
              type="number"
              id="id"
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={titlehandlerClick}
              value={enterTitle}
              ref={toDoTitleinputRef}
              type="text"
              id="title"
            />
          </div>
        </div>
        {/* <button disabled={formData === undefined ? true: false} >Add Todo</button> */}
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default NewToDo;
