import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import SEO from "../components/seo"

const contentStyle = {
  maxHeight: "initial",
  paddingTop: "32px",
  background: "rgba(0, 0, 0, 0.7)",
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <React.Fragment>
      <SEO title={`Kevin Vo | ${frontmatter.title}`} />
      <Header />
      <div className="main">
        <div className="content" style={contentStyle}>
          <h1 style={{textAlign: "center"}}>{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </React.Fragment>

  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
