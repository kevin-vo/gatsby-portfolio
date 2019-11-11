import React, { Component } from 'react';
import Header from "../components/Header"
import {Link} from 'gatsby'
import './projectsLayout.css'

const linkActiveStyle = {
  color: "white",
  paddingLeft: "10px",
  textDecoration: "none",
}

class ProjectsLayout extends Component {

  test = () => {
    console.log("hi")
  }

  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <Header />
        <div className="main" id="projects">
          <div className="content" style={{maxHeight: "initial"}}>
            <div className="links">
              <Link activeStyle={linkActiveStyle} className="animated" to="/projects/">ALL</Link>
              <Link activeStyle={linkActiveStyle} style={{marginBottom: "16px"}} className="animated" to="/projects/featured/">FEATURED</Link>
              <Link activeStyle={linkActiveStyle} className="animated" to="/projects/web/">WEB</Link>
              <Link activeStyle={linkActiveStyle} className="animated" to="/projects/mobile/">MOBILE</Link>
              <Link activeStyle={linkActiveStyle} className="animated" to="/contact/misc/">MISC</Link>
            </div>
            <div style={{paddingLeft: "32px", width: "100%"}}>
              {children}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default ProjectsLayout;
