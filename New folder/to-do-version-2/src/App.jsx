/* eslint-disable react/no-unknown-property */
import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

import Todoitems from "./components/Todoitems";
import "./APP.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "19/12/1",
    },
    {
      name: "Go to college",
      dueDate: "8/9/24",
    },
    {
      name: "Go to college",
      dueDate: "8/9/24",
    },
  ];
  return (
    <center className="todo-cont">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <Todoitems todoItems={todoItems}></Todoitems>
    </center>
  );
}

export default App;
