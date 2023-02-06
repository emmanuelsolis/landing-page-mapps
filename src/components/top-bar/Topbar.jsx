import "./Topbar.scss"
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
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
    </div>
  )
}