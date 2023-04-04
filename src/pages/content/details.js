import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTareas } from "../../context/tareasContext";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import("../../styles/details.css");

const Details = () => {
  const { postTarea } = useTareas();
  const { tareas } = useTareas();
  const { deleteTarea } = useTareas();
  const navigate = useNavigate();

  if (tareas.length === 0)
    return (
      <div>
        <h1>No hay fotografias aun</h1>
      </div>
    );
  const handleDelete = (_id) => {
    toast((t) => (
      <div>
        <p>Deseas eliminar la tarea?</p>
        <p>{_id}</p>
        <div>
          <button className="second-buttom"
          onClick={() => deleteTarea(_id)}>Borrar</button>
          <button
            className="second-buttom"
            onClick={() => {
              toast.dismiss(t.id);
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    ));
  };
  return (
    <section>
      <article className="buttom">
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("El titulo es requerido"),
            description: Yup.string().required("La descripcion es requerida"),
          })}
          onSubmit={async (values, actions) => {
            await postTarea(values);
            toast.success("Tarea creada exitosamente!");
            navigate("/details");
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                className="input-login"
                name="title"
                placeholder="Titulo"
              />
              <ErrorMessage component="p" name="title" />
              <Field
                className="input-login"
                name="description"
                placeholder="Descripcion"
              />
              <ErrorMessage component="p" name="description" />
              <button className="second-buttom" type="submit">
                Enviar
              </button>
            </Form>
          )}
        </Formik>
        <section className="nav-bar-img">
          <ul>
            <li className="second-buttom">SELECCIONAR FOTO</li>
            <li className="second-buttom">
              <FontAwesomeIcon className="icono" icon={faCameraRetro} />
              SUBIR
            </li>
          </ul>
        </section>
      </article>
      <article className="activity">
        <div>{/* {tareas[0].title} */}</div>
        {tareas.map((tarea) => (
          <div key={tarea._id}>
            <h1 className="activity-head">{tarea.title}</h1>
            <div className="description">
              {/* <img className="activity-img" src={tarea.image.url} alt="Imagen" /> */}
              <div className="description-text"></div>
              <p>{tarea.description}</p>
              <article className="buttom">
                <section className="nav-bar-img">
                  <ul>
                    <li className="second-buttom">SELECCIONAR ARCHIVO</li>
                    <li className="second-buttom">
                      <FontAwesomeIcon className="icono" icon={faFile} />
                      SUBIR
                    </li>
                  </ul>
                </section>
              </article>
              <article className="buttom">
                <section className="nav-bar-img">
                  <ul>
                    <li
                      className="second-buttom"
                      onClick={() => handleDelete(tareas._id)}
                    >
                      <FontAwesomeIcon className="icono" icon={faFile} />
                      BORRAR
                    </li>
                  </ul>
                </section>
              </article>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Details;
