import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div style={{maxWidth: "720px", margin: "0 auto"}}>
      <SEO title={`Kevin Vo | ${frontmatter.title}`} />
      <h1 style={{marginBottom: "16px"}}>{frontmatter.title}</h1>
      <h4 style={{marginBottom: "48px", color: "#444"}}>{frontmatter.date}</h4>
      <img style={{width: "100%"}} src={require("../../static" + frontmatter.thumbnail)} alt="blog-thumbnail"/>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
      }
    }
  }
`
