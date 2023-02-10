import {  useState } from 'react'
import Topbar from './components/top-bar/Topbar'
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import "./App.css"
import "./App.scss"

import Questions from './components/questions/Questions'




function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  

  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} sticky={sticky} setSticky={setSticky}  />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacts/>
        <Questions/>
        
     </div>
        
    </div>
  )
}

export default App