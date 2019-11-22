import React from 'react';
import { Link } from "gatsby"
import './styles/footer.css'
import resume from "../../content/resume.json"
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
        <Link className="animated" to="/blog/">
          BLOG
        </Link>
        {' | '}
        <Link className="animated" to="/projects/featured/">
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
        <button className="themed">
          <svg width="20" height="20" fill="white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M704 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm640 0q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm160 0q0-120-69-204t-187-84q-41 0-195 21-71 11-157 11t-157-11q-152-21-195-21-118 0-187 84t-69 204q0 88 32 153.5t81 103 122 60 140 29.5 149 7h168q82 0 149-7t140-29.5 122-60 81-103 32-153.5zm224-176q0 207-61 331-38 77-105.5 133t-141 86-170 47.5-171.5 22-167 4.5q-78 0-142-3t-147.5-12.5-152.5-30-137-51.5-121-81-86-115q-62-123-62-331 0-237 136-396-27-82-27-170 0-116 51-218 108 0 190 39.5t189 123.5q147-35 309-35 148 0 280 32 105-82 187-121t189-39q51 102 51 218 0 87-27 168 136 160 136 398z"/></svg>
        </button>
      </a>
      <a href="mailto:hey@vokev.in">
        <button className="themed">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" preserveAspectRatio="none" fill="white" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
        </button>
      </a>
      <a href={resume.file} target="_blank" rel="noopener noreferrer">
        <button className="themed">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z"/></svg>
        </button>
      </a>
      <a href="https://www.instagram.com/vokev.in/" target="_blank" rel="noopener noreferrer" >
        <button className="themed">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </button>
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
