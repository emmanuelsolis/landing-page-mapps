import "./Footer.scss"
function Footer() {
  return (
    <div className="footercont">
        <footer>
            <div className="grupo1">
                <div className="box">
                  <figure>
                  <a href="#">
                    <img src="" alt="Logo" />
                  </a>
                  </figure>
                </div>
                <div className="box"><h2>Sobre Nosotros</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, aliquid?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, aliquid?</p>
                </div>
                <div className="box"><h2>Siguenos</h2>
                <div className="red-social">
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="#" className="fa fa-instagram"></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-youtube"></a>
                </div>
                </div>
            </div>
            <div className="grupo2">
              <small>&copy; 2023 <b>Ejemplo</b> - Todos los derechos reservados </small>
            </div>
        </footer>
    </div>
      
  )
}
export default Footer