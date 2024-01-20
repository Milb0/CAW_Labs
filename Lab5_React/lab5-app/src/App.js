import React, { useState } from 'react';
import ClickMeButton from './ClickMeButton';
import ToggleButton from './ToggleButton';
import MainApp from './MainApp';
import Counter from './Counter';
import DisplayTab from './DisplayTab';
import AuthenticationForm from './AuthenticationForm';
import UserList from './UserList';
import DynamicDivForm from './DynamicDivForm';

const App = () => {
  const table1 = ["hello", "world", "from", "react"];
  const table2 = ["apple", "banana", "orange", "grape"];

  const [tables, setTables] = useState([table1, table2]);

  const handleItemClick = (tableIndex, itemIndex) => {
    const newTables = [...tables];
    newTables[tableIndex] = newTables[tableIndex].filter((_, index) => index !== itemIndex - 1);
    setTables(newTables);
  };
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
        <legend style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Exercise 01</legend>
        <ClickMeButton />
        <ToggleButton />
        <MainApp />
        <Counter />
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
        <legend style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Exercise 02</legend>
        {tables.map((table, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
            <legend style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Table {index + 1}</legend>
            <DisplayTab table={table} onItemClick={(itemIndex) => handleItemClick(index, itemIndex)} />
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
      <legend style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Exercise 03</legend>
      <AuthenticationForm onSubmit={handleFormSubmit} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
      <legend style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Exercise 04</legend>
      <h1>Your Dynamic Div App</h1>
      <DynamicDivForm />
    </div>
    </div>
  );
};

export default App;
