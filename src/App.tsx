import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppBar, AppRouter, NavBar } from "./components";
import { store } from "store/store";
import { Provider } from "react-redux";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppBar />
        <div className="mainContent">
          <NavBar />
          <AppRouter />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;