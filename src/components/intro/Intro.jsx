import "./Intro.scss";
import "./slider/Slider.scss";
import Slider from "./slider/Slider";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="box">
        <div className="container">
          <div className="left">
            <h1>Eslogan de la empresa</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              amet, vitae maiores ea quibusdam cupiditate adipisci consectetur
              blanditiis numquam repellat qui in quia voluptatum fugiat tempore,
              cum iure unde nihil?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              blanditiis ipsam, libero nam, quaerat minus quisquam non amet ad
              eius facere explicabo, deleniti incidunt quas temporibus dolorum
              necessitatibus. Facere, nobis.
            </p>
          </div>
          {/* <div className="right">
          <div className="imgContainer">
            <img src="../../../public/assets/images/cam.jpg" alt="" />
          </div>
        </div> */}
        </div>
      </div>
      <Slider />
    </div>
  );
}
