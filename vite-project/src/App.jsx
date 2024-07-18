// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import { PopNewCard } from "./components/popups/PopNewCard";
import { Main } from "./components/Main/Main";
import { PopBrowse } from "./components/popups/PopBrowse";
import { PopExit } from "./components/popups/PopExit";
import { Header } from "./components/Header/Header";
function App() {
  return (
    <>
      <div class="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
