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
  return (
    <div className="app">
      {showMenu && <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu}/>}
      <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
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
