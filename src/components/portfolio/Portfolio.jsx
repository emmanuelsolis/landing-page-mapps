
import "./Portfolio.css"
//import "./Portfolio.scss"


export default function Portfolio() {
  
  return (
    <div className='portfolio' id='portfolio'>
      <div className="topContent">
          <div className='serv-flex'>
                <div className='serv-msg1'>
                    <p>Manejamos todas las marcas y clases de equipo CCTV</p>
                </div>

                <div className='serv-title'>
                    <p>Tipos de Servicio</p>
                </div>


            </div>

            <div className='serv-flex2'>

                <div className='serv-img stat'>
                    <img className='image-container'
                        src="../../../public/assets/images/cctv-01.jpg"
                        alt='Foto A quien va dirigido.' />
                </div>

                <div className='serv-list stat'>
                    <ul>
                        <li>Mantenimiento preventivo</li>
                        <li>Servicios Técnicos</li>
                        <li>Soporte Remoto</li>
                        <li>Revisiones periódicas</li>
                        <li>Atención urgente</li>
                        <li>Apoyo logistico</li>
                    </ul>
                </div>
                <div className='serv-msg2 stat'>
                    <p className='contenedor-texto-msg2'>Póliza de Servicio para mantener todo tu equipo de CCTV funcionando permanentemente</p>
                    <div className='serv-btn'>
                        <button>Solicita Cotización</button>
                    </div>
                </div>




          </div>

      </div>
<div className="cards-container">
      <div className='card-container' >
            <img className='image-container'
                 src="../../../public/assets/images/cctv-04.jpg"
                alt='Foto A quien va dirigido.' />
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Gerentes de Mantenimiento</h3>
                </div>
                <div className="card-body">
                    <p>Mantenimiento y restauración con Garantía de Sistemas existentes, programas de mantenimiento preventivo vs. reactivo, Experiencia en colocación estratégica de camaras.
</p>
                </div>
            </div>
        </div>



         <div className='card-container' >
            <img className='image-container'
                   src="../../../public/assets/images/cctv-02.jpg"
                alt='Foto A quien va dirigido.' />
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Empresas con equipo CCTV</h3>
                </div>
                <div className="card-body">
                    <p>CCTV para plantas industriales, equipos de Gama media y alta, Certificaciones necesarias incluyendo REPSE, cobertura a nivel nacional, Atención cuidadosa a los sistemas de grabación</p>
                </div>
            </div>
        </div>
         <div className='card-container' >
            <img className='image-container'
                 src="../../../public/assets/images/cctv-03.jpg"
                alt='Foto A quien va dirigido.' />
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Empresas que esten evaluando CCTV</h3>
                </div>
                <div className="card-body">
                    <p>Especialistas en CCTV para plantas industrialesTrabajos sin anticipo, precios competitivos, proyectos de cualquier tamaño, Poliza para tener todo al 100% todo el tiempo</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}