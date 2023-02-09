import React,{useState} from "react"
import "./Slider.scss"
import i1 from "/src/assets/ALPLA.png"
import i2 from "/src/assets/BIMBO.png"
import i3 from "/src/assets/ISSSTE.png"
import i4 from "/src/assets/HazPan.jpg"
import i5 from "/src/assets/logo_barcel.png"
import i6 from "/src/assets/moldex.png"
import i7 from "/src/assets/Prodemex.png"
import i8 from "/src/assets/Ricolino.png"
import i9 from "/src/assets/suandy.jpg"
import i10 from "/src/assets/teva.png"




function Slider() {
  let sliderArr =[i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
  i9,
  i10,];
  const [x,setX] =useState(0);
  const left =()=>{
    x === 0 ? setX(-100 * (sliderArr.length-1)) : setX(x+100);
  }
  const right =()=>{
   x === -100*(sliderArr.length-1)? setX(0) : setX(x-100);
  }
    return (
    <div className="slider">{
        sliderArr.map((item,index)=>{
            return(
                <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                    <img className="img" src={item} alt="" />
                </div>
            )
        })}
        <button id="left" onClick={left}>IZQ</button>
        <button id="right" onClick={right}>DER</button>
        </div>
  )
}

export default Slider