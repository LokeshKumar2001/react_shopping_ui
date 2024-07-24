// eslint-disable-next-line no-unused-vars
import React from "react";
import FirstPage from "./routing/FirstPage";
import SecondPage from "./routing/SecondPage";
import ThirdPage from "./routing/ThirdPage";
import FourthPage from "./routing/FourthPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Delhi from "./container/Delhi";
import "./App.css";
import { GiftProvider } from "./context/ExampleContext";

const App = () => {
  const gift = "Apple";

  return (
    <div>
      {/*<NavBar />*/}
      {/*<Routes>
        <Route path="/abc" element={<FirstPage />} />
        <Route path="/xyz" element={<SecondPage />} />
        <Route path="/apple" element={<ThirdPage />} />
        <Route path="/mango" element={<FourthPage />} />
      </Routes>*/}

      <h1>Sending Gift to Bangalore</h1>

      <GiftProvider>
        <Delhi />
      </GiftProvider>
    </div>
  );
};

export default App;
