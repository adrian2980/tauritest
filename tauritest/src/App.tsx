import React from "react";
import { appWindow } from "@tauri-apps/api/window";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="titlebar" data-tauri-drag-region>
        <div
          className="titlebar-button"
          id="titlebar-minimize"
          onClick={() => appWindow.minimize()}
        >
          <img
            src="https://api.iconify.design/mdi:window-minimize.svg"
            alt="minimize"
          />
        </div>
        <div
          className="titlebar-button"
          id="titlebar-maximize"
          onClick={() => appWindow.maximize()}
        >
          <img
            src="https://api.iconify.design/mdi:window-maximize.svg"
            alt="maximize"
          />
        </div>
        <div
          className="titlebar-button"
          id="titlebar-close"
          onClick={() => appWindow.close()}
        >
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
