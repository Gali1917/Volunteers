import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import('../../styles/signup.css');

const SignUp = () => {
    return (
        <body className="body">
            <main className="main">
                <section className="section-signup">
                    <div className="title">
                        <span className="title-registro">REGISTRO</span>
                    </div>
                    <div className="form">
                        <form action="/">
                            <div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/90Z7VdBJ/pngegg.png" alt="" />
                                </div>
                                <input className="input-signup" type="text" id="name" required />
                                <label className="label-signup" htmlFor="name">Nombre</label>

                            </div>
                            <div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/fL6962YV/correo.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <input className="input-signup" type="email" id="email" required />
                                <label className="label-signup" htmlFor="email">Correo electronico</label>

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/4dKc2kHC/TELEFONO.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <input className="input-signup" type="number" id="phone" required />
                                <label className="label-signup" htmlFor="phone">Numero de telefono</label>

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/g028R6Y2/identity-verification-icon-copia.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <input className="input-signup" type="number" id="document" required />
                                <label className="label-signup" htmlFor="document">Numero de documento</label>

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/2SwnVxNt/CONTRASE-A.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <input className="input-signup" type="password" id="password" required />
                                <label className="label-signup" htmlFor="password">Contraseña</label>

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/tgvPzCTt/REPETIR-CONTRASE-A.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <input className="input-signup" type="password" id="repeat-password" required />
                                <label className="label-signup" htmlFor="repeat-password">Repetir Contraseña</label>

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/BQfFpzqy/Pngtree-men-s-work-bag-icon-4635496.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <input className="input-signup" type="text" id="ocupation" required />
                                <label className="label-signup" htmlFor="ocupation">Ocupacion</label>

                            </div><div className="input-label-signup">
                                <input className="input-signup" type="text" id="country" required />
                                <label className="label-signup" htmlFor="country">Pais de origen</label>
                                <div className="img-icon world">
                                    <img className="icono" src="https://i.postimg.cc/gcZRvpP8/mundo.png" alt="" />
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
                    </div>
                </section>
            </main>
        </body>
    )
}

export default SignUp;