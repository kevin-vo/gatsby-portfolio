import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import SEO from "../../components/seo"
import ContentGrid from "../../components/ContentGrid"

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
              link
              github
              tags
              technologies
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
      <ContentGrid dataArray={pageQuery.allMarkdownRemark.edges}/>
    </React.Fragment>
  )

}

export default Projects;
