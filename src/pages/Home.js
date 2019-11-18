import React, { Component } from "react";

import "./Home.css";

import Foto from "../assets/fotos/fotohack.jfif";

class Home extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Evento: </span>
              <span className="place">Hackathon - SpaceApps - Nasa</span>
            </div>

            <img src={Foto} alt="" />

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
          </header>
        </article>
      </section>
    );
  }
}
export default Home;
