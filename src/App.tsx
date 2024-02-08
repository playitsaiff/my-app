import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ComboBoxVirtualizedExample } from "./ComboboxTest";
import { initializeIcons } from "@fluentui/react";

initializeIcons();
function App() {
  useEffect(() => {
    console.log("asdfg");
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComboBoxVirtualizedExample />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
