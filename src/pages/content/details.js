import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTareas } from "../../context/tareasContext";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import('../../styles/details.css');

const Details = () => {
    const { tareas } = useTareas();

    if (tareas.length === 0) return (
        <div>
            <h1>
                No hay fotografias aun
            </h1>
        </div>
    )

    return (
        <section>
            <article className="buttom">
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
            </article>
            <article className="activity">
                <div>
                    {/* {tareas[0].title} */}
                </div>
                {tareas.map(tarea => (
                    <div key={tarea._id}>
                        <h1 className="activity-head">
                            {tarea.title}
                        </h1>
                        <div className="description">
                            <img className="activity-img" src={tarea.image.url} alt="Imagen" />
                            <div className="description-text">
                            </div>
                            <p>
                                {tarea.description}
                            </p>
                            <article className="buttom">
                <section className="nav-bar-img">
                    <ul>
                        <li className="second-buttom">
                            SELECCIONAR ARCHIVO
                        </li>
                        <li className="second-buttom">
                            <FontAwesomeIcon className="icono" icon={faFile} />
                            SUBIR
                        </li>
                    </ul>
                </section>
            </article>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default Details;