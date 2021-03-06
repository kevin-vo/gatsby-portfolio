import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import ContentGrid from "../../components/ContentGrid"

const Projects = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "/content/projects/.*\\\\.md$/"}, frontmatter: {tags: {in: "mobile"}}}) {
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
    <ContentGrid dataArray={pageQuery.allMarkdownRemark.edges}/>
  )

}

export default Projects;
