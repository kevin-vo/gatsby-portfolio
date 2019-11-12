import React, { Component } from 'react';
import Header from "../components/Header"
import {Link} from 'gatsby'
import './projectsLayout.css'
import {Accordion, Card, Button} from "react-bootstrap"

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
        <Header />
        <div className="main" id="projects">
          <div className="content" style={{maxHeight: "initial"}}>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h1>FILTER PROJECTS</h1>
                    <i className="fas fa-chevron-down"></i>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="links">
                      <Link activeStyle={linkActiveStyle} className="animated" to="/projects/">ALL</Link>
                      <Link activeStyle={linkActiveStyle} style={{marginBottom: "16px"}} className="animated" to="/projects/featured/">FEATURED</Link>
                      <Link activeStyle={linkActiveStyle} className="animated" to="/projects/web/">WEB</Link>
                      <Link activeStyle={linkActiveStyle} className="animated" to="/projects/mobile/">MOBILE</Link>
                      <Link activeStyle={linkActiveStyle} className="animated" to="/projects/misc/">MISC</Link>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>


            <div className="links" id="md">
              <Link activeStyle={linkActiveStyle} className="animated" to="/projects/">ALL</Link>
              <Link activeStyle={linkActiveStyle} style={{marginBottom: "16px"}} className="animated" to="/projects/featured/">FEATURED</Link>
              <Link activeStyle={linkActiveStyle} className="animated" to="/projects/web/">WEB</Link>
              <Link activeStyle={linkActiveStyle} className="animated" to="/projects/mobile/">MOBILE</Link>
              <Link activeStyle={linkActiveStyle} className="animated" to="/projects/misc/">MISC</Link>
            </div>
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