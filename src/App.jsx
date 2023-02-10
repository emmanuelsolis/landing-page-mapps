import { useState } from 'react'

import './App.css'
import Topbar from './components/top-bar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import "./App.scss"
import Menu from './components/menu/Menu'



function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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