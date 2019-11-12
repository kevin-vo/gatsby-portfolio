import React, { Component } from 'react';
import Header from "../components/Header"
import SEO from "../components/seo"
import {Link} from 'gatsby'
import './styles/blogLayout.css'

const linkActiveStyle = {
  color: "white",
  paddingLeft: "10px",
  textDecoration: "none",
}

class ProjectsLayout extends Component {

  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <SEO title="Kevin Vo | Blog" />
        <Header />
        <div className="main" id="blog">
          <div className="content" style={{maxHeight: "initial"}}>
            <div className="children">
              {children}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default ProjectsLayout;
