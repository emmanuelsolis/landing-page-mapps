import Footer from "./footer/Footer"
import "./Questions.scss"
function Questions() {
  return (
    <div className="container" id="questions">
        <div className="questions">
          
          <div className="cont">
          <h2>Preguntas Frecuentes</h2>
              <div className="quest">
                  <h3>¿Lorem ipsum dolor sit amet?</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio non pariatur architecto porro iusto enim delectus sed temporibus consequatur adipisci?</p>
              </div>
              <div className="quest">
              <h3>¿Lorem ipsum dolor sit amet?</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio non pariatur architecto porro iusto enim delectus sed temporibus consequatur adipisci?</p>
              </div>
              <div className="quest">
              <h3>¿Lorem ipsum dolor sit amet?</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio non pariatur architecto porro iusto enim delectus sed temporibus consequatur adipisci?</p>
              </div>
          </div>

        </div>
        <div className="footer">
        <Footer/>
        </div>
    </div>
  )
}
export default Questions