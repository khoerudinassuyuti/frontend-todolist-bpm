import React from 'react';

export default function TodoItem({item, onRemove, onToggle}){
  return (
    <div style={{padding:8, border:'1px solid #ddd', marginBottom:8, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div>
        <input type="checkbox" checked={item.done} onChange={()=>onToggle(item.id)} />
        <strong style={{marginLeft:8}}>{item.title}</strong>
        <small style={{marginLeft:8, color:'#666'}}>[{item.category}]</small>
      </div>
      <div>
        <button onClick={()=>onRemove(item.id)}>Hapus</button>
      </div>
    </div>
  )
}
