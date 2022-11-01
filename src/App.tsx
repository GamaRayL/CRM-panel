import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppSelector } from "hooks";
import { FetchOptions, IAddresses } from "types";
import { AppBar, AppRouter, NavBar } from "components";
import "./App.scss";

function App() {
  const address = useAppSelector(state => state.address.address);
  const [arrayAddresses, setArrayAddresses] = useState<IAddresses>();

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
      <AppBar />
      <div className="mainContent">
        <NavBar />
        <AppRouter
          arrayAddresses={arrayAddresses}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
