import React from 'react';
import {Link} from 'gatsby'
import Header from "../components/Header"
import SEO from "../components/seo"
import "./styles/projects.css"
import ProjectsGrid from "../components/ProjectsGrid"

const Projects = () => (
  <React.Fragment>
    <SEO title="Kevin Vo | Projects" />
    <Header />
    <div className="main" id="projects">
      <div className="content" style={{maxHeight: "initial"}}>
        <div className="links">
          <Link className="animated" to="/">ALL</Link>
          <Link style={{marginBottom: "16px"}} className="animated" to="/projects/">FEATURED</Link>
          <Link className="animated" to="/contact/">WEB</Link>
          <Link className="animated" to="/contact/">MOBILE</Link>
          <Link className="animated" to="/contact/">MISC</Link>
        </div>

        <ProjectsGrid />
      </div>
    </div>
  </React.Fragment>
)

export default Projects;
