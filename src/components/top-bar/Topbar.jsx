import "./Topbar.scss"
import { useState,useEffect } from 'react'
 function Topbar({menuOpen,setMenuOpen, sticky, setSticky}) {

  useEffect(() => {
    const handleScroll = () => {
     setSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    // <div className={'topbar ' + (menuOpen && 'active') + `${sticky ? 'sticky' : ""}` }>
    <nav className={'topbar ' + (menuOpen && 'active') +`${sticky ? "sticky" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Example</a>
        </div>
        
        <div className="rigth">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar