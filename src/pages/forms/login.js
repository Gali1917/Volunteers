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
                                <label htmlFor="usuario">Usuario</label>
                                <input className="cred" type="text" id="usuario" />
                            </div>
                            <div className="input-label">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" id="password"/>
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