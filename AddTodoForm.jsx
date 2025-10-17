import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodoForm({onAdd}){
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Kerja');

  const submit = (e) => {
    e.preventDefault();
    if(!title.trim()) return;
    onAdd({id: uuidv4(), title, category, done:false});
    setTitle('');
  }

  return (
    <form onSubmit={submit}>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Tambah tugas..." />
      <select value={category} onChange={e=>setCategory(e.target.value)}>
        <option>Kerja</option>
        <option>Pribadi</option>
        <option>Urgent</option>
      </select>
      <button type="submit">Tambah</button>
    </form>
  )
}
