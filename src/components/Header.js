import React from "react";

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
        <div>
        <a rel="Linkedin" href="https://www.linkedin.com/in/leouluz" target="_blank">
          <img className=" imagenslogo" src={logoLinkedin} alt="Linkedin" />
        </a>
        <a rel="Facebook" href="https://www.facebook.com/profile.php?id=100001659773939" target="_blank">
          <img className=" imagenslogo" src={logoFacebook} alt="Facebook" />
        </a>
        <a rel="Twitter" href="https://twitter.com/leoluz14" target="_blank">
          <img className=" imagenslogo" src={logoTwitter} alt="Twitter" />
        </a>
        <a rel="Twitter" href="https://github.com/leouluz" target="_blank">
          <img className=" imagenslogo" src={logoGithub} alt="GitHub" />
        </a>
        <a rel="Twitch" href="https://www.twitch.tv/leouluz" target="_blank">
          <img className=" imagenslogo" src={logoTwitch} alt="Twitch" />
        </a>
        <a rel="Instagram" href="https://www.instagram.com/leouluz/" target="_blank">
          <img className=" imagenslogo" src={logoInsta} alt="instagram" />
        </a>
      </div></div>
    </header>
  );
}
