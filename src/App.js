// src/App.js
import React from 'react';
import './App.css';
import Table from './Component/Dashboard/Table.js';

function App() {
  const data = [
    { Name: 'John', Age: 28, City: 'New York' },
    { Name: 'Anna', Age: 22, City: 'London' },
    { Name: 'Mike', Age: 32, City: 'San Francisco' },
    { Name: 'Mikes', Age: 78, City: 'Sans Francisco' },
  ];

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
