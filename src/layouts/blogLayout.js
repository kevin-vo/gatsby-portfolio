import React, { Component } from 'react';
import Header from "../components/Header"
import SEO from "../components/seo"
import './styles/blogLayout.css'

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
