import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const contentStyle = {
  background: "rgba(0, 0, 0, 0.7)",
}

const renderExternalLinks = (link, github) => {
  const linkRender = (
    <h4 style={{marginBottom: "8px"}}>
      <i className="fas fa-external-link-alt">:</i>{' '}
        <a href={link} target="_blank" rel="noopener noreferrer" >
          {link}
        </a>
    </h4>
  )

  const githubRender = (
    <h4 style={{marginBottom: "8px"}}>
      <i className="fab fa-github">:</i>{' '}
        <a href={github} target="_blank" rel="noopener noreferrer" >
          Github Repo
        </a>
    </h4>
  )
  if (link && github) {
    return (
      <React.Fragment>
        {linkRender}
        {githubRender}
      </React.Fragment>
    )
  } else if (link) {
    return (linkRender)
  } else if (github){
    return(githubRender)
  }
}

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div style={contentStyle}>
      <SEO title={`Kevin Vo | ${frontmatter.title}`} />
      <h1 style={{textAlign: "center", marginBottom: "16px"}}>{frontmatter.title}</h1>
      <div style={{marginBottom: "48px", textAlign: "center"}}>
        {renderExternalLinks(frontmatter.link, frontmatter.github)}
        Technologies: {frontmatter.technologies.join(", ")}
      </div>
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
        path
        title
        link
        github
        technologies
      }
    }
  }
`
