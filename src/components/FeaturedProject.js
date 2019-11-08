import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import './styles/FeaturedProjects.css'
import { Link } from "gatsby"

const mainContainerStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}

const thumbnailContainerStyle = (src) => {
  return({
    backgroundImage: "url(" + src + ")",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: "75%",
    height: "75%",
  })
}

const Project = (node) => {
  const {title, description, thumbnail} = node;
  return(
    <Link key={title} className="cell" to={"/"}>
      <div className="thumbnail-container" style={thumbnailContainerStyle(thumbnail)}/>
    </Link>
  )
}

const FeaturedProject = () => {
  const data = useStaticQuery(graphql`
    query {
      allFeaturedJson {
        edges {
          node {
            title
            description
            thumbnail
          }
        }
      }
    }
  `)

  const projects = data.allFeaturedJson.edges;
  return (
    <div className="main-container" style={mainContainerStyle}>
      {projects.map((i) => Project(i.node))}
    </div>

  )
}

export default FeaturedProject;
