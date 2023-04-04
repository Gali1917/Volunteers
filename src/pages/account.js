import React from "react";
import { Link } from "react-router-dom";
import "../styles/account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Hexagon from "react-hexagon";
import { useTareas } from "../context/tareasContext";

const Account = () => {

  const { tareas } = useTareas();

  if (tareas.length === 0) return (
    <div>
      <h1>
        No hay fotografias aun
      </h1>
    </div>
  )

  return (
    <main>
      <section className="head-perfil">
        <div className="img-fondo" >
          <img src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de fondo" />
        </div>
        <div className="img-perfil">
          <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Foto de perfil" />
        </div>
      </section>
      
      <section className="cards">
        <article className="activity">
          <div className="activity-head">
            ACTIVIDADES NIVEL 1
          </div>
          <div className="card-content">

            <div className="activity-text">
              {/* {tareas.map(tarea => (
                <div key={tarea._id}>
                  {tarea.description}
                </div>
              ))} */}
              <p><span className="number-activity">1.</span>  Plantar mínimo un árbol nativo, describiendo sus características, coordenadas y fotografías del lugar.</p>
              <p><span className="number-activity">2.</span> Construir una técnica para hidratar los árboles plantados, realice una descripción del paso a paso y tome fotografías del procedimiento.</p>
              <p><span className="number-activity">3.</span> Elaborar abonos orgánicos como compostaje o humus para aplicar en los árboles plantados y describir la técnica usada mediante fotografías.</p>
              <p><span className="number-activity">4.</span> Utilizar medio de transporte alternativo durante una semana, subir imagen de cada día, describiendo su experiencia en bicicleta, patines entre otros.</p>
              <p><span className="number-activity">5.</span> Identifique una norma legal ambiental, tome una fotografía y realice un ensayo en la descripción.</p>
              <p><span className="number-activity">6.</span> Fruta comida, semilla sembrada, construya un semillero con mínimo (3) frutas diferentes, fotografié y describa las características de cada una.</p>
              <p><span className="number-activity">7.</span> Identifique y fotografié un impacto ambiental negativo en su hábitat y formule una solución en la descripción.</p>
              <p><span className="number-activity">8.</span> Realizar actividad física en grupo, fotografié y describa su experiencia junto con el tipo de deporte utilizado, describa a sus acompañantes.</p>
              <p><span className="number-activity">9.</span> Organice un compa sin usar desechables e invite a familiares y amigos, describa las alternativas que utilizo y comparta fotografías con los invitados.</p>
            </div>
            <div className="activity-images">
              <div className="card-imgpng uppng image">
                <img src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/2265247/pexels-photo-2265247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="card-imgpng centerpng image">
                <img src="https://images.pexels.com/photos/14218611/pexels-photo-14218611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/14197381/pexels-photo-14197381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/414181/pexels-photo-414181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="card-imgpng botpng image">
                <img src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>
              <div className="card-imgpng uppng">
                <Link to='/details/'>
                  <img className="hexagon-1" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
                </Link>

                <img className="hexagon-2" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
              </div>
              <div className="card-imgpng centerpng">
                <img className="hexagon-3" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
                <img className="hexagon-4" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
                <img className="hexagon-5" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
                <img className="hexagon-6" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
                <img className="hexagon-7" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
              </div>
              <div className="card-imgpng botpng">
                <img className="hexagon-8" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
                <img className="hexagon-9" src="https://i.postimg.cc/Rhn10HFx/hexagon150.png" alt="" />
              </div>

              {/* <div className="hexagonpng imgs">
                <div className="imgspng p">
                  <div className="card-imgpng uppng">
                    <p>4...</p>
                    <p>5...</p>
                  </div>
                  <div className="card-imgpng centerpng">
                    <p>1...</p>
                    <p>3...</p>
                    <p>6...</p>
                    <p>7...</p>
                    <p>9...</p>
                  </div>
                  <div className="card-imgpng botpng">
                    <p>2...</p>
                    <p className="number-9">8...</p>
                  </div>
                </div>
              </div> */}
            </div>

          </div>
          <div className="mark-bottom">
            <p>VOLUNTEERS</p>
          </div>
        </article>
        <article className="activity">
          <div className="activity-head">
            ACTIVIDADES NIVEL 2
          </div>
          <div className="card-content">

            <div className="activity-text">
              <p><span className="number-activity">10.</span> Organice una caminata ecológica e invite a familiares y amigos, realice una observación del lugar y registre los mejores momentos.</p>
              <p><span className="number-activity">11.</span> Con apoyo de la comunidad, limpie un lugar invadido por basuras, realice registro fotográfico del antes y el después, describa los residuos recuperados dándoles una disposición final adecuada.</p>
              <p><span className="number-activity">12.</span> Realice investigación sobre la meditación y sus beneficios, ubique un lugar y póngalo en práctica, preferiblemente en la naturaleza.</p>
              <p><span className="number-activity">13.</span> Fotografiar un ave, identificarla mediante la aplicación “Merlin Bird ID” e investigar su importancia ecológica.</p>
              <p><span className="number-activity">14.</span> Por el planeta apagar todas las luces del hogar y desconectar todos los electrodomésticos una hora durante una semana. Evidenciando el proceso diario mediante fotografías.</p>
              <p><span className="number-activity">15.</span> Evitar consumir bebidas azucaradas embotelladas y procesadas durante una semana. Haga un estimado de cuantos litros evitó consumir y cuantifique y escriba la cantidad de azúcar evitado.</p>
              <p><span className="number-activity">16.</span> Implemente alternativas orgánicas en los productos de aseo personal y del hogar en general, para reducir el uso de productos derivados del petróleo, investigue en su localidad.</p>
              <p><span className="number-activity">17.</span> Evitar consumir carne, pollo, pescado o embutidos por una semana. Describa y registre con fotos el menú alternativo diario.</p>
              <p><span className="number-activity">18.</span> Determine cómo su cultura local puede ayudar a la preservación del ambiente por medio de  técnicas, costumbres y tradiciones.</p>
            </div>
            <div className="imgs2">
              <div className="card-img f1">
                <Hexagon className="hexagono" />
              </div>
              <div className="card-img f2">
                <Hexagon className="hexagono h1" />
                <Hexagon className="hexagono h2" />
              </div>
              <div className="card-img f3">
                <Hexagon className="hexagono h1" />
                <Hexagon className="hexagono h2" />
                <Hexagon className="hexagono h3" />
              </div>
              <div className="card-img f4">
                <Hexagon className="hexagono h1" />
                <Hexagon className="hexagono h2" />
              </div>
              <div className="card-img f5">
                <Hexagon className="hexagono" />
              </div>
            </div>
          </div>
          <div className="mark-bottom">
            <p>VOLUNTEERS</p>
          </div>
        </article>
        <article className="activity">
          <div className="activity-head">
            ACTIVIDADES NIVEL 3
          </div>
          <div className="card-content">

            <div className="activity-text">
              <p><span className="number-activity">19.</span> Por la seguridad alimentaria, inicia un huerto orgánico casero, recuperando semillas y esquejes de plantas usadas en la cocina como cebolla, ajo, tomate, pimentón, entre otros. Describa el proceso y registre mediante fotografías.</p>
              <p><span className="number-activity">20.</span> Idear método para reducir consumo de agua en el hogar. Determine el ahorro mensual, llenando la matriz anexada. Registre todo el proceso mediante fotografías.</p>
              <p><span className="number-activity">21.</span> Construir un artículo funcional y estético con materiales reciclados. Describa y registre todo el proceso con fotografías.</p>
              <p><span className="number-activity">22.</span> Investigue exhaustivamente la importancia de las abejas y polinizadores nativos. Escriba y socialice su opinión respecto a la conservación en una comunidad, registre su socialización.</p>
              <p><span className="number-activity">23.</span> Analizar e investigar sobre el derecho de petición según la Ley 1755 de 2015, realice un resumen de lo aprendido en la descripción.</p>
              <p><span className="number-activity">24.</span> Realizar investigación exhaustiva sobre cambio climático. Analice sus alcances y plantee estrategias para la adaptación.</p>
              <p><span className="number-activity">25.</span> Fotografiar un paisaje natural y describir sus servicios Ecosistemicos mediante un análisis de los beneficios que provee a la comunidad.</p>
              <p><span className="number-activity">26.</span> Investigar ampliamente acerca de la procrastinación y determine estrategias para evitarla con un ejemplo propio, registre su experiencia.</p>
              <p><span className="number-activity">27.</span> Proponer un plan para la reducción de impactos ambientales para su cuenca hidrográfica, teniendo en cuenta las necesidades de la comunidad y la protección de los recursos naturales. registre su experiencia.</p>

            </div>
            <div className="imgs3">
              <div className="card-img f1">
                <Hexagon className="hexagono" />
              </div>
              <div className="card-img f2">
                <Hexagon className="hexagono h1" />
                <Hexagon className="hexagono h2" />
              </div>
              <div className="card-img f3">
                <Hexagon className="hexagono h1" />
                <Hexagon className="hexagono h2" />
                <Hexagon className="hexagono h3" />
              </div>
              <div className="card-img f4">
                <Hexagon className="hexagono h1" />
                <Hexagon className="hexagono h2" />
              </div>
              <div className="card-img f5">
                <Hexagon className="hexagono" />
              </div>
            </div>
          </div>
          <div className="mark-bottom">
            <p>VOLUNTEERS</p>
          </div>
        </article>
        <div className="pdf">
          <Link className="second-buttom certificado" id="certificado">OBTEN TU CERTIFICADO</Link>
        </div>

      </section>
    </main>
  )
}

export default Account;