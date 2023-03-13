import React from "react";
import { Link } from "react-router-dom";
import "../styles/account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

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
            <div className="imgs">

            </div>
          </div>
        </article>
        <article className="activity">

        </article>
      </section>
    </main>
  )
}

export default Account;