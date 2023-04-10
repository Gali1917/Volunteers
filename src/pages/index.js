import React from "react";
import { Link } from "react-router-dom";
import("../styles/index.css");

const Index = () => {
    return (
        <main>
            <div className="frontpage">
                <h1>VOLUNTEERS</h1>
                <Link className="background-video" to="https://www.youtube.com/watch?v=qMR5NU0lGOc&ab_channel=JrBroncellEspinelPorras" target="_blank">
                    <video  src="https://res.cloudinary.com/dd8a6qc45/video/upload/v1681150218/background-video_keyumk.mp4" autoPlay muted preload="auto"></video>
                    
                </Link>
            </div>
            <section>
                <h1 className="welcome">BIENVENIDOS!</h1>
                <article>
                    <h2>OBJETIVOS PRINCIPALES DE UN COACH AMBIENTALISTA</h2>
                    <p>El objetivo principal de un coach ambientalista, es fomentar un cambio positivo en las personas que lo rodean y en quienes requieren de su guía como coach, para motivarlos a reducir su impacto negativo ambiental y contribuir de manera eficiente en la protección del medio ambiente.
                        Por medio del curso Volunteers el coach ambientalista también liderara actividades sociales, ambientales, personales a modo voluntario en momentos donde la sociedad lo necesite en caso de emergencia ambiental aportando iniciativas comunitarias.
                    </p>
                </article>
                <article>
                    <h2>¿COMO SE PUEDE DESEMPEÑAR UN COACH AMBIENTALISTA EN LA SOCIEDAD?</h2>
                    <p>El coach ambientalista puede trabajar y contratar sus servicios con individuos, grupos, empresas u organizaciones, instituciones educativas, universidades, Juntas de acción comunal, etc.
                    Su enfoque puede ser amplio o específico, dependiendo de las necesidades de cada persona o gremio que desea ser parte de la solución.
                    En resumen, el coach ambientalista puede trabajar e interactuar con el 100% de la sociedad en general, el cual busca empoderar a la sociedad para que tomen medidas concretas en favor del medio ambiente y al mismo tiempo, mejorar su calidad de vida y bienestar general propio o el de su gremio.
                    </p>
                </article>
            </section>
        </main>
    )
}
export default Index;