import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, settingDarkMode] = useState(false)
  function handleClick(){
    settingDarkMode((changingMode)=> !changingMode)
    console.log(darkMode)
  }
 
  const appClass = darkMode ? "App dark" : "App light"
// replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkMode?"Dark Mode":"Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

