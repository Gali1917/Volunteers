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
                                <label htmlFor="name">Nombre</label>
                                <input className="cred" type="text" id="name" />

                            </div>
                            <div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/fL6962YV/correo.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <label htmlFor="email">Correo electronico</label>
                                <input className="cred" type="email" id="email" />

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/4dKc2kHC/TELEFONO.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <label htmlFor="phone">Numero de telefono</label>                
                                <input className="cred" type="number" id="phone" />

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/g028R6Y2/identity-verification-icon-copia.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <label htmlFor="document">Numero de documento</label>
                                <input className="cred" type="number" id="document" />

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/2SwnVxNt/CONTRASE-A.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <label htmlFor="password">Contraseña</label>
                                <input className="cred" type="password" id="password" />

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/tgvPzCTt/REPETIR-CONTRASE-A.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <label htmlFor="repeat-password">Repetir Contraseña</label>
                                <input className="cred" type="password" id="repeat-password" />

                            </div><div className="input-label-signup">
                                <div className="img-icon">
                                    <img className="icono" src="https://i.postimg.cc/BQfFpzqy/Pngtree-men-s-work-bag-icon-4635496.png" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <label htmlFor="ocupation">Ocupacion</label>
                                <input className="cred" type="text" id="ocupation" />

                            </div><div className="input-label-signup">
                                <label htmlFor="country">Pais de origen</label>
                                <input className="cred" type="text" id="country" />
                                <div className="img-icon world">
                                    <img className="icono" src="https://i.postimg.cc/gcZRvpP8/mundo.png" alt="" />
                                </div>
                            </div>
                            <button className="button-enter-signup">
                                <Link to="/account" className="">
                                    SUMATE A LA ACCION
                                </Link>
                            </button>
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