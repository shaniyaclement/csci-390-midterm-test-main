import React, { useState } from "react";
import "./App.css";
// TODO: import the Item component
// TODO: import the Header component
import Header from "./components/Header"
import Item from "./components/Item"

function App() {
  // State Hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);


  // Helper Functions

  /* TODO: Complete this method to add an item to the items array
          i.  item should be an object with this structure:
            {id: generate_a_random_number, value: newItem}
          ii. Make use of the setItems and setNewItems state methods.
          iii. Clue: you can use "Math.floor(Math.random() * 100)" to generate a random number.
  */

  function addItem() {
    // adds item to item arr if the item is not empty then returns item input to blank
    if (newItem !== "") {
      const item = { 
        id: Math.floor(Math.random() * 1000), 
        value: newItem }
      setItems(arr => [...arr, item]);
      setNewItem("");
    }
  }

  /* TODO: Complete this method to delete an item(with id) from the items array */
  function deleteItem(id) {
    // filters through item options and deletes item based on id
    setItems(items => items.filter(info => {
      return info.id !== id;
    }))
  }


  // Main part of app
  return (
    <div className="app">
      {
      /* TODO: Add the Header component */
      // displays header
      <Header />
      }

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        // onChange={}  TODO: complete the onChange to call the setNewItem hook. 
        onChange={(id) => setNewItem(id.target.value)}
      />

      {/* TODO: Add a button with onClick that calls the addItem() */}
      // adds item to array
      <button onClick={addItem}>Add</button>

        {/* TODO: Iterate through the items array, for each:
                a. Call the Item component with a property of 'item'
                b. Add a button that deletes the item (HINT this button onClick should call deleteItem() 
                    i. use ❌ as the content for your delete button 
                    ii. use className="delete-button" also */}
      {items().map((item, index) => (
        <div key={index}>

          <Item item={item.value} />

          // deletes item from arr onClick
          <button onClick={() => deleteItem(item.id)} className="delete-button">❌</button>

        </div>
      
      ))}
    
    </div>
  );
}

export default App;
