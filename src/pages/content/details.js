import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useTareas } from "../../context/tareasContext";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import("../../styles/details.css");

const Details = () => {
  const { postTarea, tareas, deleteTarea, getTarea, updateTarea } = useTareas();
  const params = useParams();
  const [tarea, setTarea] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = 1500;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, []);
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
              console.log(values);
              // if (params.id) {
              //   await updateTarea(params.id, values);
              // } else {
              //   await postTarea(values);
              // }
              // toast.success("Tarea creada exitosamente!");
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
                <input
                  className="second-buttom"
                  type="file"
                  onChange={(e) => setFieldValue("image", e.target.files[0])}
                />

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
      </div>
    );
  // const handleDelete = (id) => {
  //   toast((t) => (
  //     <div>
  //       <p>Deseas eliminar la tarea? {id}</p>
  //       {console.log(id)}
  //       <div>
  //         <button
  //           className="second-buttom"
  //           onClick={() => {
  //             deleteTarea(id);
  //             toast.dismiss(t.id);
  //           }}
  //         >
  //           Borrar
  //         </button>
  //         <button
  //           className="second-buttom"
  //           onClick={() => {
  //             toast.dismiss(t.id);
  //           }}
  //         >
  //           Cancelar
  //         </button>
  //       </div>
  //     </div>
  //   ));
  // };
  return (
    <section>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <article className="buttom">
          <Formik
            initialValues={tarea}
            validationSchema={Yup.object({
              title: Yup.string().required("El titulo es requerido"),
              description: Yup.string().required("La descripcion es requerida"),
            })}
            onSubmit={async (values, actions) => {
              console.log(values);
              if (params.id) {
                await updateTarea(params.id, values);
              } else {
                await postTarea(values);
              }
              actions.setSubmitting(false);
              toast.success("Tarea creada exitosamente!");
              await window.location.reload();
            }}
            enableReinitialize={true}
          >
            {({ handleSubmit, setFieldValue, isSubmitting }) => (
              <Form className="form" onSubmit={handleSubmit}>
                <div className="input-label-form">
                  <label htmlFor="title">Titulo</label>
                  <Field
                    className="input-form input-form-un"
                    name="title"
                    placeholder="Titulo"
                  />
                  <ErrorMessage component="p" name="title" />
                </div>
                <div className="input-label-form">
                  <label htmlFor="description">Descripcion</label>

                  <Field
                    component="textarea"
                    className="input-form input-form-un"
                    name="description"
                    placeholder="Descripcion"
                  />
                  <ErrorMessage component="p" name="description" />
                </div>
                <div className="input-label-form">
                  <label htmlFor="image">Imagen</label>
                  <input
                    className="second-buttom"
                    type="file"
                    onChange={(e) => setFieldValue("image", e.target.files[0])}
                  />
                </div>
                <button
                  className="second-buttom send"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Cargando" : "Actualizar"}
                </button>
              </Form>
            )}
          </Formik>
          <img className="detail-image" src={tarea.image.url} alt="Imagen" />
        </article>
        /* <article className="activity">
        <div>
          <h1 className="activity-head">{tarea.title}</h1>
          <div className="description">
            {async () => {
              const urlImgae = await tarea.image.url;
              if (urlImgae) {
                <img className="activity-img" src={urlImgae} alt="Imagen" />;
              }
            }}
            <div className="description-text"></div>
            <p>{tarea.description}</p>

                <ul>
                  <li
                    className="second-buttom"
                    onClick={() => handleDelete(tareas._id)}
                  >
                    <FontAwesomeIcon className="icono" icon={faFile} />
                    BORRAR
                  </li>
                </ul>
          </div>
        </div>
      </article> */
      )}
    </section>
  );
};

export default Details;
