import Card from "..//card/Card.jsx";
import Slider from "react-slick";
import { dataDigitalCards } from "/src/data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.scss";
import AutoPlay from "../slider/SimpleSlider.jsx";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  }
  return (
    <div className="body">
      <Slider{...settings}>
        {dataDigitalCards.map((item, idx) => (
          <div className="card" key={idx}>
            <div className="card-top">
              <img src={item.linkImg} alt={item.title} />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
