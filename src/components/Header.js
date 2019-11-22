import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logoInsta from "../assets/instagram.svg";
import logoLinkedin from "../assets/linkedin.svg";
import logoFacebook from "../assets/facebook.svg";
import logoGithub from "../assets/github.svg";
import logoTwitter from "../assets/twitter.svg";
import logoTwitch from "../assets/twitch.svg";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <h1>Meu Site Pessoal</h1>
        <Link to="https://www.twitch.tv/leouluz">
          <img className=" imagenslogo" src={logoLinkedin} alt="Linkedin" />
        </Link>
        <Link to="https://www.twitch.tv/leouluz">
          <img className=" imagenslogo" src={logoFacebook} alt="Facebook" />
        </Link>
        <Link to="https://www.twitch.tv/leouluz">
          <img className=" imagenslogo" src={logoTwitter} alt="Twitter" />
        </Link>
        <Link to="https://www.twitch.tv/leouluz">
          <img className=" imagenslogo" src={logoGithub} alt="GitHub" />
        </Link>
        <Link to="https://www.twitch.tv/leouluz">
          <img className=" imagenslogo" src={logoTwitch} alt="Twitch" />
        </Link>
        <Link to="https://www.twitch.tv/leouluz">
          <img className=" imagenslogo" src={logoInsta} alt="instagram" />
        </Link>
      </div>
    </header>
  );
}
