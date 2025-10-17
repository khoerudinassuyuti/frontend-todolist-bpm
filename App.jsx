import React from "react";
import TodoList from "./components/TodoList";

export default function App(){
  return (
    <div style={{maxWidth:800, margin:'20px auto', fontFamily:'Arial, sans-serif'}}>
      <h1>To-Do List Prototype — BPM</h1>
      <TodoList />
    </div>
  )
}
