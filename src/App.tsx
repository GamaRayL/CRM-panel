import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppBar, AppRouter, NavBar } from "./components";
import { store } from "store/store";
import { Provider } from "react-redux";
import "./App.scss";

function App() {
  const [address, setAddress] = useState<string>("");
  const [arrayAddresses, setArrayAddresses] = useState();

  interface FetchOptions {
    method: "GET" | "POST";
    headers: HeadersInit;
    body: string;
    mode: "cors" | "no-cors" | "same-origin";
  }

  useEffect(() => {
    async function getSetData() {
      const url =
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
      const key = "27961e37c56e0d9e2e3cb0c65fde7ed501ca8e43";
      const options: FetchOptions = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + key,
        },
        body: JSON.stringify({ query: address }),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setArrayAddresses(data);
    }
    getSetData();
  }, [address]);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppBar />
        <div className="mainContent">
          <NavBar />
          <AppRouter
            setAddress={setAddress}
            arrayAddresses={arrayAddresses}
          />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
