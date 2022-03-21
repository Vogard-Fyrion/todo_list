import React, {useState} from 'react'
import ToDoDisplay from './components/ToDoDisplay';
import ToDoForm from './components/ToDoForm';

function App() {
  const [items, setItems] = useState([])

  const recieveNewItem = (newItem) => {
    setItems([...items, newItem])
  }

  const updateItems = (items) => {
    setItems(items)
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <ToDoForm onNewItem = {recieveNewItem}/>
      <ToDoDisplay items={items} updateItems={updateItems}/>
    </div>
  );
}

export default App;
