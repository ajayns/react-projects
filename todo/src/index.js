import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TodoList } from "./components/TodoList.js";

const Todo = () => {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim().length) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text,
    };

    setItems(prevItem => [...prevItem, newTodo]);
    setText("");
  };

  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <input onChange={e => setText(e.target.value)} value={text} />
        <button>Add #{items.length + 1}</button>
      </form>
    </div>
  );
};

// ========================================

ReactDOM.render(<Todo />, document.getElementById("root"));
