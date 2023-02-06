import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Topbar from './components/top-bar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import "./App.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Topbar/>
     <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacts/>
     </div>
    </div>
  )
}

export default App
