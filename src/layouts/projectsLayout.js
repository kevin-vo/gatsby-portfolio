import React, { Component } from 'react';
import Header from "../components/Header"
import {Link} from 'gatsby'
import './projectsLayout.css'

class ProjectsLayout extends Component {


  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <Header />
        <div className="main" id="projects">
          <div className="content" style={{maxHeight: "initial"}}>
            <div className="links">
              <Link className="animated" to="/projects/">ALL</Link>
              <Link style={{marginBottom: "16px"}} className="animated" to="/projects/featured/">FEATURED</Link>
              <Link className="animated" to="/projects/web/">WEB</Link>
              <Link className="animated" to="/projects/mobile/">MOBILE</Link>
              <Link className="animated" to="/contact/misc/">MISC</Link>
            </div>
            <div style={{paddingLeft: "32px"}}>
              {children}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default ProjectsLayout;
