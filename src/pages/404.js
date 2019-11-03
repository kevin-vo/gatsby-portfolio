import React from "react"
import { Link } from "gatsby"
import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <Background/>
    <div style={{padding: "64px"}}>
      <h1>404</h1>
      <h3> PAGE NOT FOUND :(</h3>
      <Link style={{color: "#999"}} to="/">Get me outta here 🤢</Link>
    </div>
  </React.Fragment>
)

export default NotFoundPage
