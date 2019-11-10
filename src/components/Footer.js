import React from 'react';
import { Link } from "gatsby"
import './styles/footer.css'

const Footer = () => (
  <div className="footer">
    <Link to="/">
      <img
        style={{marginBottom: "16px", height: "32px"}}
        src={require("../images/kv_transparent.svg")} alt="logo"/>
    </Link>
    <div className="nav">
      <p>
        <Link className="animated" to="/">
          HOME
        </Link>
        {' | '}
        <Link className="animated" to="/">
          BLOG
        </Link>
        {' | '}
        <Link className="animated" to="/projects/">
          PROJECTS
        </Link>
        {' | '}
        <Link className="animated" to="/contact/">
          CONTACT
        </Link>
      </p>
    </div>
    <div className="socials">
      <a href="https://github.com/kevin-vo" target="_blank" rel="noopener noreferrer" >
        <button className="themed"><i className="fab fa-github-alt"></i></button>
      </a>
      <a href="mailto:hey@vokev.in">
        <button className="themed"><i className="fas fa-envelope"></i></button>
      </a>
      <a href="/">
        <button className="themed"><i className="fas fa-file"></i></button>
      </a>
      <a href="https://www.instagram.com/vokev.in/" target="_blank" rel="noopener noreferrer" >
        <button className="themed"><i className="fab fa-instagram fa-lg"></i></button>
      </a>
    </div>

    <p>
      <span role="img" aria-label="Rocket">🚀</span>
      by Kevin Vo - 2019{' '}
      <i className="far fa-copyright"></i>{' '}
    </p>
  </div>
)

export default Footer;
