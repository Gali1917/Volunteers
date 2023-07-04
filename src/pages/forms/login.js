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

                  if (signInSuccessful) {
                    toast.success("Sesion iniciada exitosamente!");
                    navigate("/account");
                  } else {
                    toast.error("Credenciales invalidas. Intente nuevamente.");
                  }
                }}
                enableReinitialize={true}
                className="form"
              >
                {({ handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="input-label">
                      <div className="img-icon-user">
                        <FontAwesomeIcon className="icono" icon={faUserCheck} />
                      </div>
                      <Field
                        className="input-login"
                        name="email"
                        type="email"
                        required
                      />
                      <label className="label-login" htmlFor="email">
                        Email
                      </label>
                      <ErrorMessage
                        className="error-message"
                        component="p"
                        name="email"
                      />
                    </div>
                    <div className="input-label">
                      <div className="img-icon-password">
                        <FontAwesomeIcon
                          className="icono"
                          icon={faUnlockKeyhole}
                        />
                        <img src="" alt="" />
                      </div>
                      <Field
                        className="input-login"
                        name="password"
                        type="password"
                        required
                      />
                      <label className="label-login" htmlFor="password">
                        Contraseña
                      </label>
                      <ErrorMessage
                        className="error-message"
                        component="p"
                        name="password"
                      />
                    </div>
                    <div className="buttons">
                      <button
                        className="button-enter"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Cargando" : "Actua por el planeta"}
                        <FontAwesomeIcon className="icono icon-enter" icon={faArrowAltCircleRight} />
                      </button>
                      <Link to="/signup" className="">
                        <button className="button-signin">REGISTRARSE</button>
                      </Link>
                    </div>
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
