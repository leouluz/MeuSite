import React from "react";

import "./Header.css";

import logoInsta from "../assets/instagram.svg";
import logoLinkedin from "../assets/linkedin.svg";
import logoFacebook from "../assets/facebook.svg";
import logoGithub from "../assets/github.svg";
import logoTwitter from "../assets/twitter.svg";

export default function Header() {
  return (
    <header id="-main-header">
      <div className="header-content">
        <img src={logoInsta} alt="instagram" />
        <img src={logoLinkedin} alt="linkedin" />
        <img src={logoFacebook} alt="facebook" />
        <img src={logoGithub} alt="github" />
        <img src={logoTwitter} alt="twitter" />
      </div>
    </header>
  );
}
