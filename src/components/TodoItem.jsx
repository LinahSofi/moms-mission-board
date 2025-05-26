import React from 'react';

function TodoItem({ chore, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.5rem',
        textDecoration: chore.completed ? 'line-through' : 'none',
      }}
    >
      <input
        type="checkbox"
        checked={chore.completed}
        onChange={() => onToggle(chore.id)}
        style={{ marginRight: '0.5rem' }}
      />
      <span style={{ flexGrow: 1 }}>{chore.text}</span>
      <button onClick={() => onDelete(chore.id)} style={{ marginLeft: '0.5rem' }}>
        🗑
      </button>
    </li>
  );
}

export default TodoItem;