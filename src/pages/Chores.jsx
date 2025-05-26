import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

function Chores() {
  const [chores, setChores] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  const addChore = (text) => {
    const newChore = {
      id: Date.now(),
      text,
      completed: false,
    };
    setChores([newChore, ...chores]);
  };

  const toggleChore = (id) => {
    const updated = chores.map((chore) =>
      chore.id === id ? { ...chore, completed: !chore.completed } : chore
    );
    setChores(updated);
  };

  const deleteChore = (id) => {
    setChores(chores.filter((chore) => chore.id !== id));
  };

  const filteredChores = chores.filter((chore) => {
    if (filter === 'active') return !chore.completed;
    if (filter === 'completed') return chore.completed;
    return true;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mission List</h2>
      <TodoForm onAdd={addChore} />

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>All</button>
        <button onClick={() => setFilter('active')} disabled={filter === 'active'}>Active</button>
        <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completed</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredChores.map((chore) => (
          <TodoItem
            key={chore.id}
            chore={chore}
            onToggle={toggleChore}
            onDelete={deleteChore}
          />
        ))}
      </ul>
    </div>
  );
}

export default Chores;