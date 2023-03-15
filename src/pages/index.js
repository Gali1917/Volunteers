import React from "react";
import { Link } from "react-router-dom";
import("../styles/index.css");

const Index = () => {
    return (
        <main>
            <div className="frontpage">
                <h1>VOLUNTEERS</h1>
                <img src="https://i.postimg.cc/FKKbw1V7/background-home-volunteers.jpg" alt="Portada de inicio" />
            </div>
            <section>
                <h1 className="welcome">BIENVENIDOS!</h1>
                <h2>Mision</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id delectus officiis quam vero autem. Rerum nihil dolor voluptate delectus perspiciatis, explicabo, blanditiis, repellendus aliquid excepturi quam dolorem nemo a.</p>
                <h2>Vision</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id corrupti enim quibusdam deserunt non quo dicta eaque, maiores fugiat nobis. Impedit cumque vitae libero magni recusandae maiores porro voluptate eaque!</p>
                <h2>Apoyanos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo deleniti iste, facilis nisi sunt soluta sint rem exercitationem reprehenderit laborum delectus. Numquam modi amet, cupiditate ea ut voluptatem. Alias?</p>
            </section>
        </main>
    )
}
export default Index;