import React, { Component } from "react";

import "./Home.css";

import Foto from "../assets/fotos/fotohack.jfif";
import More from "../assets/more.svg";

class Home extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>
                <strong> Evento:</strong>
              </span>
              <span className="place">
                <strong> Hackathon - SpaceApps - Nasa</strong>
              </span>
            </div>
            <img src={More} alt="mais" />
          </header>
          <img src={Foto} alt="Foto" />

          <footer>
            <div className="actions">
              <p>like</p>
              <p>coment</p>
              <p>send</p>
            </div>

            <strong> 900 Curtidas</strong>
            <p>
              texto dhsuaidhusaidhusa dhusaihd dshauidhas
              <span>#hashtag</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Evento: </span>
              <span className="place">Hackathon - SpaceApps - Nasa</span>
            </div>
          </header>
          <img src={Foto} alt="Foto" />

          <footer>
            <div className="actions">
              <p>like</p>
              <p>coment</p>
              <p>send</p>
            </div>

            <strong>curtidas</strong>
            <p>
              texto dhsuaidhusaidhusa dhusaihd dshauidhas
              <span>#hashtag</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}
export default Home;
