import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import SEO from "../components/seo"

const contentStyle = {
  maxHeight: "initial",
  paddingTop: "32px",
  background: "rgba(0, 0, 0, 0.7)",
}

const renderExternalLinks = (link, github) => {
  console.log(link)
  console.log(github)
  const linkRender = (
    <h4 style={{textAlign: "center", marginBottom: "8px"}}>
      <i className="fas fa-external-link-alt">:</i>{' '}
        <a href={link} target="_blank" rel="noopener noreferrer" >
          {link}
        </a>
    </h4>
  )

  const githubRender = (
    <h4 style={{textAlign: "center", marginBottom: "8px"}}>
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
    <React.Fragment>
      <SEO title={`Kevin Vo | ${frontmatter.title}`} />
      <Header />
      <div className="main">
        <div className="content" style={contentStyle}>
          <h1 style={{textAlign: "center", marginBottom: "16px"}}>{frontmatter.title}</h1>
          <div style={{marginBottom: "48px"}}>
            {renderExternalLinks(frontmatter.link, frontmatter.github)}
          </div>
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
        link
        github
      }
    }
  }
`
