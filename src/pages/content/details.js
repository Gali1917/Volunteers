import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useTareas } from "../../context/tareasContext";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {  useParams } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import("../../styles/details.css");

const Details = () => {
  const { postTarea, tareas, deleteTarea, getTarea, updateTarea } = useTareas();
  const params = useParams();
  const [tarea, setTarea] = useState({
    title: "",
    description: "",
    image: null
  });
  useEffect(() => {
    (async () => {
      if (params.id) {
        const tarea = await getTarea(params.id);
        setTarea(tarea);
      }
    })();
  }, [params.id]);

  if (tareas.length === 0)
    return (
      <div>
        <h1>No hay fotografias aun</h1>
        <article className="buttom">
          <Formik
            initialValues={tarea}
            validationSchema={Yup.object({
              title: Yup.string().required("El titulo es requerido"),
              description: Yup.string().required("La descripcion es requerida"),
            })}
            onSubmit={async (values, actions) => {
              await postTarea(values);
              toast.success("Tarea creada exitosamente!");
              // window.location.reaload();
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
      </div>
    );
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>Deseas eliminar la tarea? {id}</p>
        {console.log(id)}
        <div>
          <button
            className="second-buttom"
            onClick={() => {
              deleteTarea(id);
              toast.dismiss(t.id);
            }}
          >
            Borrar
          </button>
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
          initialValues={tarea}
          validationSchema={Yup.object({
            title: Yup.string().required("El titulo es requerido"),
            description: Yup.string().required("La descripcion es requerida"),
          })}
          onSubmit={async (values, actions) => {
            if(params.id){
              await updateTarea(params.id, values);
            } else{
            await postTarea(values);
            }
            toast.success("Tarea creada exitosamente!");
            // window.location.reaload();
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="title">Titulo</label>
              <Field
                className="input-login"
                name="title"
                placeholder="Titulo"
              />
              <ErrorMessage component="p" name="title" />
              <label htmlFor="description">Descripcion</label>

              <Field
                component="textarea"
                className="input-login"
                name="description"
                placeholder="Descripcion"
                rows={5} 
              />
              <ErrorMessage component="p" name="description" />
              <label htmlFor="image">Imagen</label>
              <input className="second-buttom" type="file" onChange={(e) => setFieldValue('image', e.target.files[0])}/>

              <button className="second-buttom" type="submit">
                ACTUALIZAR
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
        {/* {tareas.map((tarea) => ( */}
        {/* <div key={tarea._id}> */}
        <div>
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
        {/* ))} */}
      </article>
    </section>
  );
};

export default Details;
