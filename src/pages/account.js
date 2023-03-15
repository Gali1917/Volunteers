import React from "react";
import { Link } from "react-router-dom";
import "../styles/account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Hexagon from "react-hexagon";

const Account = () => {

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
      <section className="nav-bar-img">
        <ul>
          <li className="second-buttom">
            SELECCIONAR FOTO
          </li>
          <li className="second-buttom">
            <FontAwesomeIcon className="icono" icon={faCameraRetro} />
            SUBIR
          </li>
        </ul>
      </section>
      <section className="cards">
        <article className="activity">
          <div className="activity-head">
            ACTIVIDADES NIVEL 1
          </div>
          <div className="card-content">

            <div className="activity-text">
              <p>1. Copiar las 27 actividades en hoja reciclada.</p>
              <p>2. Bodar, estampar logo VOLUNTEERS en una gorra o prenda.</p>
              <p>3. Utilizar medio de transporte alternativo.</p>
              <p>4. Plantar un arbol nativo.</p>
              <p>5. Fruta comida, semilla sembrada.</p>
              <p>6. Hidratar y abonar tu arbol.</p>
              <p>7. Apagar el celular durante un dia.</p>
              <p>8. Realizar actividad fisica en grupo.</p>
              <p>9. Organizar un evento sin usar desechables.</p>
            </div>
            <div className="imgs">
              <div className="card-img up">
                <Hexagon className="hexagono" />
                <Hexagon className="hexagono" />
              </div>
              <div className="card-img center">
                <Hexagon className="hexagono" />
                <Hexagon className="hexagono" />
                <Hexagon className="hexagono" />
                <Hexagon className="hexagono" />
                <Hexagon className="hexagono" />
              </div>
              <div className="card-img bot">
                <Hexagon className="hexagono bot1" />
                <Hexagon className="hexagono" />
              </div>
            </div>
          </div>
        </article>
        <article className="activity">
          <div className="activity-head">
            ACTIVIDADES NIVEL 2
          </div>
          <div className="card-content">

            <div className="activity-text">
              <p>10. Realizar caminata ecologica</p>
              <p>11. Limpiar un espacio rural o urbano.</p>
              <p>12. Investigar y practicar meditacion.</p>
              <p>13. Observar un ave e intentar identificarla.</p>
              <p>14. Por el planeta apagar las luces del hogar por una hora.</p>
              <p>15. No consumir bebidas azucaradas en un dia.</p>
              <p>16. Usar alternativas organicas en los productos de aseo.</p>
              <p>17. No comer carne, pollo, pescado o embutidos en un dia.</p>
              <p>18. Mejorar la condicion de otro ser vivo.</p>
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
        </article>
        <article className="activity">
          <div className="activity-head">
            ACTIVIDADES NIVEL 3
          </div>
          <div className="card-content">

            <div className="activity-text">
              <p>19. Por la seguridad alimentaria, inicia un herto organico.</p>
              <p>20. Idear metodo para reducir consumo de agua en el hogar.</p>
              <p>21. Construir un articulo con material reciclado.</p>
              <p>22. Investigar la importancia de las abejas.</p>
              <p>23. Investigar una norma ambiental de su interes.</p>
              <p>24. Realizar investigacion exhaustiva sobre cambio climatico.</p>
              <p>25. Fotografia un paisaje y describe sus servicios ecosistemicos.</p>
              <p>26. Investigar sobre la procrastinacion y ponerla en practica.</p>
              <p>27. Comentar nueve (9) actividades de otros Volunteers.</p>

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
        </article>
        <div className="pdf">
          <Link className="second-buttom certificado" id="certificado">OBTEN TU CERTIFICADO</Link>
        </div>
      </section>
    </main>
  )
}

export default Account;