import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import "../../styles/signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { users, postUser } = useUser();
  const params = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    document: "",
    ocupation: "",
    country: "",
    roles: ["user"],
  });

  return (
    <body className="body">
      <main className="main">
        <section className="section-signup">
          <div className="form">
            <Formik
              initialValues={user}
              validationSchema={Yup.object({
                name: Yup.string().required("*"),
                email: Yup.string().required("*"),
                password: Yup.string().required("*"),
                number: Yup.string().required("*"),
                document: Yup.string().required("*"),
                ocupation: Yup.string().required("*"),
                country: Yup.string().required("*"),
              })}
              onSubmit={async (values, actions) => {
                console.log(values);
                await postUser(values);
                actions.setSubmitting(false);
                toast.success("Usuario creado exitosamente!");
                navigate("/login");
              }}
              enableReinitialize={true}
              className="form"
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="input-label-signup">
                    <div className="img-icon">
                      <img
                        className="icono"
                        src="https://i.postimg.cc/90Z7VdBJ/pngegg.png"
                        alt=""
                      />
                    </div>
                    <Field
                      className="input-signup"
                      name="name"
                      required
                    />
                    <label className="label-signup" htmlFor="name">
                      Nombre
                    </label>
                    <ErrorMessage className="error-message" component="p" name="name" />
                  </div>
                  <div className="input-label-signup">
                    <div className="img-icon">
                      <img
                        className="icono"
                        src="https://i.postimg.cc/fL6962YV/correo.png"
                        alt=""
                      />
                      <img src="" alt="" />
                    </div>
                    <Field
                      className="input-signup"
                      name="email"
                      type="email"
                      required
                    />
                    <label className="label-signup" htmlFor="email">
                      Email
                    </label>
                    <ErrorMessage className="error-message" component="p" name="email" />
                  </div>
                  <div className="input-label-signup">
                    <div className="img-icon">
                      <img
                        className="icono"
                        src="https://i.postimg.cc/4dKc2kHC/TELEFONO.png"
                        alt=""
                      />
                      <img src="" alt="" />
                    </div>
                    <Field
                      className="input-signup"
                      name="number"
                      type="number"
                      required
                    />
                    <label className="label-signup" htmlFor="number">
                      Numero
                    </label>
                    <ErrorMessage className="error-message" component="p" name="number" />
                  </div>
                  <div className="input-label-signup">
                    <div className="img-icon">
                      <img
                        className="icono"
                        src="https://i.postimg.cc/g028R6Y2/identity-verification-icon-copia.png"
                        alt=""
                      />
                      <img src="" alt="" />
                    </div>
                    <Field
                      className="input-signup"
                      name="document"
                      type="number"

                      required
                    />
                    <label className="label-signup" htmlFor="document">
                      Documento
                    </label>
                    <ErrorMessage className="error-message" component="p" name="document" />
                  </div>
                  <div className="input-label-signup">
                    <div className="img-icon">
                      <img
                        className="icono"
                        src="https://i.postimg.cc/2SwnVxNt/CONTRASE-A.png"
                        alt=""
                      />
                      <img src="" alt="" />
                    </div>
                    <Field
                      className="input-signup"
                      name="password"
                      type="password"
                      required
                    />
                    <label className="label-signup" htmlFor="password">
                      Contraseña
                    </label>
                    <ErrorMessage className="error-message" component="p" name="password" />
                  </div>
                  {/* <div className="input-label-signup">
                    <div className="img-icon">
                      <img
                        className="icono"
                        src="https://i.postimg.cc/tgvPzCTt/REPETIR-CONTRASE-A.png"
                        alt=""
                      />
                      <img src="" alt="" />
                    </div>
                    <Field
                      className="input-signup"
                      name="repeat-password"
                      required
                    />
                    <label className="label-signup" htmlFor="repeat-password">
                      Repita la contraseña
                    </label>
                    <ErrorMessage className="error-message" component="p" name="password" />
                  </div> */}

                  <div className="input-label-signup">
                    <div className="img-icon">
                      <img
                        className="icono"
                        src="https://i.postimg.cc/BQfFpzqy/Pngtree-men-s-work-bag-icon-4635496.png"
                        alt=""
                      />
                      <img src="" alt="" />
                    </div>
                    <Field
                      className="input-signup"
                      name="ocupation"
                      required
                    />
                    <label className="label-signup" htmlFor="ocupation">
                      Ocupacion
                    </label>
                    <ErrorMessage className="error-message" component="p" name="ocupation" />
                  </div>
                  <div className="input-label-signup">
                    <Field
                      className="input-signup"
                      name="country"
                      required
                    />
                    <label className="label-signup" htmlFor="country">
                      Ciudad
                    </label>
                    <div className="img-icon world">
                      <img
                        className="icono"
                        src="https://i.postimg.cc/gcZRvpP8/mundo.png"
                        alt=""
                      />
                    </div>
                    <ErrorMessage className="error-message-country" component="p" name="country" />
                  </div>
                  {/* <Link to="/login" className="button-sign"> */}
                    <button
                      className="button-enter-signup"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Cargando" : "SUMATE A LA ACCION"}
                    </button>
                  {/* </Link> */}
                  <Link to="/conditions" className="terminosycondiciones">
                    Terminos & Condiciones
                  </Link>
                </Form>
              )}
            </Formik>
          </div>
          {/* <div className="title">
            <span className="title-registro">REGISTRO</span>
          </div>
          <div className="form">
            <form action="/">
              <div className="input-label-signup">
                <div className="img-icon">
                  <img
                    className="icono"
                    src="https://i.postimg.cc/90Z7VdBJ/pngegg.png"
                    alt=""
                  />
                </div>
                <input
                  className="input-signup"
                  type="text"
                  id="name"
                  required
                />
                <label className="label-signup" htmlFor="name">
                  Nombre
                </label>
              </div>
              <div className="input-label-signup">
                <div className="img-icon">
                  <img
                    className="icono"
                    src="https://i.postimg.cc/fL6962YV/correo.png"
                    alt=""
                  />
                  <img src="" alt="" />
                </div>
                <input
                  className="input-signup"
                  type="email"
                  id="email"
                  required
                />
                <label className="label-signup" htmlFor="email">
                  Correo electronico
                </label>
              </div>
              <div className="input-label-signup">
                <div className="img-icon">
                  <img
                    className="icono"
                    src="https://i.postimg.cc/4dKc2kHC/TELEFONO.png"
                    alt=""
                  />
                  <img src="" alt="" />
                </div>
                <input
                  className="input-signup"
                  type="number"
                  id="phone"
                  required
                />
                <label className="label-signup" htmlFor="phone">
                  Numero de telefono
                </label>
              </div>
              <div className="input-label-signup">
                <div className="img-icon">
                  <img
                    className="icono"
                    src="https://i.postimg.cc/g028R6Y2/identity-verification-icon-copia.png"
                    alt=""
                  />
                  <img src="" alt="" />
                </div>
                <input
                  className="input-signup"
                  type="number"
                  id="document"
                  required
                />
                <label className="label-signup" htmlFor="document">
                  Numero de documento
                </label>
              </div>
              <div className="input-label-signup">
                <div className="img-icon">
                  <img
                    className="icono"
                    src="https://i.postimg.cc/2SwnVxNt/CONTRASE-A.png"
                    alt=""
                  />
                  <img src="" alt="" />
                </div>
                <input
                  className="input-signup"
                  type="password"
                  id="password"
                  required
                />
                <label className="label-signup" htmlFor="password">
                  Contraseña
                </label>
              </div>
              <div className="input-label-signup">
                <div className="img-icon">
                  <img
                    className="icono"
                    src="https://i.postimg.cc/tgvPzCTt/REPETIR-CONTRASE-A.png"
                    alt=""
                  />
                  <img src="" alt="" />
                </div>
                <input
                  className="input-signup"
                  type="password"
                  id="repeat-password"
                  required
                />
                <label className="label-signup" htmlFor="repeat-password">
                  Repetir Contraseña
                </label>
              </div>
              <div className="input-label-signup">
                <div className="img-icon">
                  <img
                    className="icono"
                    src="https://i.postimg.cc/BQfFpzqy/Pngtree-men-s-work-bag-icon-4635496.png"
                    alt=""
                  />
                  <img src="" alt="" />
                </div>
                <input
                  className="input-signup"
                  type="text"
                  id="ocupation"
                  required
                />
                <label className="label-signup" htmlFor="ocupation">
                  Ocupacion
                </label>
              </div>
              <div className="input-label-signup">
                <input
                  className="input-signup"
                  type="text"
                  id="country"
                  required
                />
                <label className="label-signup" htmlFor="country">
                  Pais de origen
                </label>
                <div className="img-icon world">
                  <img
                    className="icono"
                    src="https://i.postimg.cc/gcZRvpP8/mundo.png"
                    alt=""
                  />
                </div>
              </div>
              <Link to="/account" className="button-sign">
                <button className="button-enter-signup">
                  SUMATE A LA ACCION
                </button>
              </Link>
              <Link to="/conditions" className="terminosycondiciones">
                Terminos & Condiciones
              </Link>
            </form>
          </div> */}
        </section>
      </main>
    </body>
  );
};

export default SignUp;
