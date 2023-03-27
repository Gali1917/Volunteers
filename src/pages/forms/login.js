import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

import('../../styles/login.css');

const Login = () => {
    return (
        <body className="body">
            <main className="main">
                <section className="section-login">
                    <div className="logopage">
                        <img src="https://i.postimg.cc/sD8GfRfB/TRIANGULO-NEGRO-VOLUNTEERS-t-1.png" alt="logo" />
                    </div>
                    <div className="form">
                        <h2>Hola Volunteers!</h2>
                        <h2>Inicie sesion para continuar</h2>
                        <form action="/">
                            <div className="input-label">
                                <div className="img-icon-user">
                                    <FontAwesomeIcon className="icono" icon={faUserCheck} />
                                </div>
                                <input className="input-login" type="text" id="usuario" required/>
                                <label className="label-login" htmlFor="usuario">Usuario</label>
                            </div>
                            <div className="input-label">
                                <input className="input-login" type="password" id="password" required/>
                                <label className="label-login" htmlFor="password">Contraseña</label>
                                <div className="img-icon-password">
                                    <FontAwesomeIcon className="icono" icon={faUnlockKeyhole} />
                                </div>

                            </div>
                            <div className="buttons">
                                <Link to="/account" className="button-enter">
                                    <button>
                                        Actua por el planeta
                                        <FontAwesomeIcon className="icono icon-enter" icon={faArrowAltCircleRight} />
                                    </button>
                                </Link>
                                <Link to="/signup" className="">
                                    <button className="button-signin">
                                        REGISTRARSE
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </body>
    )
}

export default Login;