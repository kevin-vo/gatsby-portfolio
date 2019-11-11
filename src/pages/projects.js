import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby'
import Header from "../components/Header"
import SEO from "../components/seo"
import "./styles/projects.css"
import ContentGrid from "../components/ContentGrid"

const Projects = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "/content/projects/.*\\\\.md$/"}}) {
        edges {
          node {
            frontmatter {
              title
              date
              path
              color
              description
              thumbnail
            }
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <SEO title="Kevin Vo | Projects" />
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

          <ContentGrid dataArray={pageQuery.allMarkdownRemark.edges}/>
        </div>
      </div>
    </React.Fragment>
  )

}

export default Projects;
