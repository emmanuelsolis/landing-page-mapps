import { FormLogin } from "../form/FormLogin";
import "./Works.scss";
export default function Works() {
  return (
    <div className="works" id="works">
      <section className="top">
        <div className="formulario">
          <FormLogin />
        </div>
        <div className="headline">
          <h4>Mapps</h4>
          <h1>Headline</h1>
          <h3>Subheading</h3>
          <div className="pic">
            <img
              src="../../../public/assets/images/tecnicoprobando.jpg"
              alt="Tecnico porbando camaras de seguridad"
            />
          </div>
        </div>
      </section>
      <div className="buttomtext">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus,
        ratione et ullam at vero eos dicta temporibus culpa praesentium eum sint
        in sed quae obcaecati dolorem omnis molestias possimus!
      </div>
    </div>
  );
}
