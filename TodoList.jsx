import React, {useState} from 'react';
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

export default function TodoList(){
  const [items, setItems] = useState([
    {id:'1', title:'Contoh tugas', category:'Kerja', done:false}
  ]);

  const add = (task) => setItems([task, ...items]);
  const remove = (id) => setItems(items.filter(i=>i.id!==id));
  const toggle = (id) => setItems(items.map(i=> i.id===id?{...i, done:!i.done}:i));

  return (
    <div>
      <AddTodoForm onAdd={add} />
      <div style={{marginTop:20}}>
        {items.map(it => <TodoItem key={it.id} item={it} onRemove={remove} onToggle={toggle} />)}
      </div>
    </div>
  )
}
