import './App.css';
import React, { useState } from 'react';


function App() {

  const [items, setItems] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ]);

  const [newItem, setNewItem] = useState("")
  const [radioButton, setPriority] = useState("")

  const itemNodes = items.map((item, index) => {
    return (
      <li key = { index } className={item.priority == "low" ? "low" : "high"}>
        <span>{item.name}</span>
      </li>
    )
  });

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  }

  const handleRadio = (priority) => {
    setPriority(priority.target.value)
  }



  const saveNewItem = (event) => {
    event.preventDefault()
    // priority.preventDefault()
    const copyItem = [...items]
    copyItem.push(
      { 
        name: newItem, 
        priority: radioButton
    }
    )
    setItems(copyItem)
    setNewItem("")
  }


  return (
    <>
      <h1>ToDo's</h1>
      <form onSubmit = { saveNewItem }>
        <input id="new-item" type="text" onChange={ handleItemInput } value={newItem}/>
        
        <label htmlFor="high">High</label>
        <input type="radio" name="radioButton" value="high" onChange={handleRadio}></input>
        <label htmlFor="low">Low</label>
        <input type="radio" name="radioButton" value="low" onChange={handleRadio}></input>
        <input type="submit" value="Save Item" />

      </form>

      <ul>
        { itemNodes }
      </ul>
    </>
  );
}

export default App;
