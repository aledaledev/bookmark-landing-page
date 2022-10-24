import React, { useState } from "react"
import Header from "./views/Header"
import Hero from "./views/Hero"
import Features from "./views/Features"
import Download from "./views/Download"
import Questions from "./views/Questions"
import Contact from "./views/Contact"
import Footer from "./views/Footer"
import "./scss/main.scss"
import MenuMobile from "./components/MenuMobile"

function App() {
  const [showMenu, setShowMenu] = useState(false);
  document.body.id='blocking-body';
  const [roll, setRoll] = useState("");

  let initialPosition = window.scrollY;
  const rollMenu = () => {
    let actualPosition = window.scrollY;
    initialPosition >= actualPosition? setRoll("roll-menu") : setRoll("");
    initialPosition = actualPosition;
  };
  window.addEventListener("scroll", rollMenu);

  return (
    <div className="app">
      {showMenu && <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} rollMenu={rollMenu}/>}
      <Header showMenu={showMenu} setShowMenu={setShowMenu} roll={roll} setRoll={setRoll} />
      <Hero/>
      <Features/>
      <Download/>
      <Questions/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
