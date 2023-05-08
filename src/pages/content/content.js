import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import("../../styles/content.css");

const Content = () => {
  return (
    <main>
      <div className="title">
        <h1>MI MURO</h1>
      </div>

      <article className="content-card">
        <div className="name-perfil">
          <Link to="/account">
            <img
              src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1683044613/Volunteers/nsjozcsdxzhmvlvtv7ah.png"
              alt="Foto de perfil"
            />
          </Link>
          <Link to="/account">
            <p>Nombre de perfil</p>
          </Link>
        </div>
        <div className="content-img">
          <img
            src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1683044613/Volunteers/nsjozcsdxzhmvlvtv7ah.png"
            alt="Foto de actividad"
          />
          <div className="img-button">
            <FontAwesomeIcon className="icono" icon={faThumbsUp} />
            <p>5 Likes</p>
          </div>
          <div className="content-comment">
            <p>"Comentario de la imagen"</p>
          </div>
          <div className="content-newcomment">
            <textarea
              name="new-comment"
              id="new-comment"
              cols="60"
              rows="3"
              placeholder="Nuevo comentario..."
            ></textarea>
            <FontAwesomeIcon className="icono" icon={faPaperPlane} />
          </div>
        </div>
      </article>
      <article className="content-card">
        <div className="name-perfil">
          <Link to="/account">
            <img
              src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1683044613/Volunteers/nsjozcsdxzhmvlvtv7ah.png"
              alt="Foto de perfil"
            />
          </Link>
          <Link to="/account">
            <p>Nombre de perfil</p>
          </Link>
        </div>
        <div className="content-img">
          <img
            src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1683044613/Volunteers/nsjozcsdxzhmvlvtv7ah.png"
            alt="Foto de actividad"
          />
          <div className="img-button">
            <FontAwesomeIcon className="icono" icon={faThumbsUp} />
            <p>5 Likes</p>
          </div>
          <div className="content-comment">
            <p>"Comentario de la imagen"</p>
          </div>
          <div className="content-newcomment">
            <textarea
              name="new-comment"
              id="new-comment"
              cols="60"
              rows="3"
              placeholder="Nuevo comentario..."
            ></textarea>
            <FontAwesomeIcon className="icono" icon={faPaperPlane} />
          </div>
        </div>
      </article>
      <article className="content-card">
        <div className="name-perfil">
          <Link to="/account">
            <img
              src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1683044613/Volunteers/nsjozcsdxzhmvlvtv7ah.png"
              alt="Foto de perfil"
            />
          </Link>
          <Link to="/account">
            <p>Nombre de perfil</p>
          </Link>
        </div>
        <div className="content-img">
          <img
            src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1683044613/Volunteers/nsjozcsdxzhmvlvtv7ah.png"
            alt="Foto de actividad"
          />
          <div className="img-button">
            <FontAwesomeIcon className="icono" icon={faThumbsUp} />
            <p>5 Likes</p>
          </div>
          <div className="content-comment">
            <p>"Comentario de la imagen"</p>
          </div>
          <div className="content-newcomment">
            <textarea
              name="new-comment"
              id="new-comment"
              cols="60"
              rows="3"
              placeholder="Nuevo comentario..."
            ></textarea>
            <FontAwesomeIcon className="icono" icon={faPaperPlane} />
          </div>
        </div>
      </article>
      <article className="content-card">
        <div className="name-perfil">
          <Link to="/account">
            <img
              src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1683044613/Volunteers/nsjozcsdxzhmvlvtv7ah.png"
              alt="Foto de perfil"
            />
          </Link>
          <Link to="/account">
            <p>Nombre de perfil</p>
          </Link>
        </div>
        <div className="content-img">
          <img
            src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1683044613/Volunteers/nsjozcsdxzhmvlvtv7ah.png"
            alt="Foto de actividad"
          />
          <div className="img-button">
            <FontAwesomeIcon className="icono" icon={faThumbsUp} />
            <p>5 Likes</p>
          </div>
          <div className="content-comment">
            <p>"Comentario de la imagen"</p>
          </div>
          <div className="content-newcomment">
            <textarea
              name="new-comment"
              id="new-comment"
              cols="60"
              rows="3"
              placeholder="Nuevo comentario..."
            ></textarea>
            <FontAwesomeIcon className="icono" icon={faPaperPlane} />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Content;
