import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

import("../../styles/login.css");

const Login = () => {
  const navigate = useNavigate();
  const { users, postSignIn } = useUser();
  const params = useParams();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <body className="body">
      <main className="main">
        <section className="section-login">
          <div className="logopage">
            <img
              src="https://i.postimg.cc/sD8GfRfB/TRIANGULO-NEGRO-VOLUNTEERS-t-1.png"
              alt="logo"
            />
          </div>
          <div className="form">
            <h2>Hola Volunteers!</h2>
            <h2>Inicie sesion para continuar</h2>
            <div className="form">
              <Formik
                initialValues={user}
                validationSchema={Yup.object({
                  email: Yup.string().required("*"),
                  password: Yup.string().required("*"),
                })}
                onSubmit={async (values, actions) => {
                  console.log(values);
                  const signInSuccessful = await postSignIn(values);
                  actions.setSubmitting(false);

                  if(signInSuccessful){
                    toast.success("Sesion iniciada exitosamente!");
                  }else{
                    toast.error("Credenciales invalidas. Intente nuevamente.");
                  }

                  // navigate("/account");
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
                      <ErrorMessage
                        className="error-message"
                        component="p"
                        name="email"
                      />
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
                      <ErrorMessage
                        className="error-message"
                        component="p"
                        name="password"
                      />
                    </div>
                    {/* <Link to="/login" className="button-sign"> */}
                    <button
                      className="button-enter-signup"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Cargando" : "Actua por el planeta"}
                    </button>
                    {/* </Link> */}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Login;
