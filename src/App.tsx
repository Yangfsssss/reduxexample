import React from "react";
import {store} from './store'
import { Provider } from "react-redux";
import logo from "./logo.svg";
import Posts from "./component/Posts";
import PostForm from "./component/PostForm";
import "./App.css";



function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
