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
    setItems({
      id: Math.floor(Math.random() * 1000),
      value: newItem
    });
  }

  /* TODO: Complete this method to delete an item(with id) from the items array */
  function deleteItem(id) {
    const result = items.filter((e) => e.id !== id)
    setItems(result);
  }


  // Main part of app
  return (
    <div className="app">
      {
      /* TODO: Add the Header component */
      <Header />
      }

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        // onChange={}  TODO: complete the onChange to call the setNewItem hook. 
        onChange={(id) => setNewItem(id)}
      />

      {/* TODO: Add a button with onClick that calls the addItem() */}
      <button onClick={addItem}>Add</button>

        {/* TODO: Iterate through the items array, for each:
                a. Call the Item component with a property of 'item'
                b. Add a button that deletes the item (HINT this button onClick should call deleteItem() 
                    i. use ❌ as the content for your delete button 
                    ii. use className="delete-button" also */}

      {items().map((item) => (
        <div>

          <Item item={item} />

          <button onClick={() => deleteItem(item.id)} className="-button">❌</button>

        </div>
      
      ))}
    
    </div>
  );
}

export default App;
