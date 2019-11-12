import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby'
import ContentGrid from "../components/ContentGrid"
import "./styles/blog.css"

const Projects = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "/content/blog/.*\\\\.md$/"}}) {
        edges {
          node {
            frontmatter {
              title
              date
              path
              description
              thumbnail
            }
          }
        }
      }
    }
  `)

  return (
    <div className="blog-container">
      <div className="blog-text-container">
        <h1>
          BLOG
        </h1>
        <p>
          I take a slice of stuff I find interesting and post them
          here. I hope you find them helpful and, better yet, interesting
          as well.
        </p>
        <p>
          Feel free to{' '}
          <Link to="/contact/">
            contact me
          </Link>
          {' '}for any questions or comments.
        </p>
      </div>
      <ContentGrid blog dataArray={pageQuery.allMarkdownRemark.edges}/>
    </div>
  )

}

export default Projects;
