import React from "react"
import { Link } from "gatsby"
import Background from "../components/background"
import SEO from "../components/seo"
import "./index.css"

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <Background/>
    <div style={{padding: "64px"}}>
      <h1 style={{fontSize: "50px"}}>404</h1>
      <h2> PAGE NOT FOUND :(</h2>
      <Link className="animated" style={{fontSize: "1.17em"}} to="/">
        <h2>Get me outta here 🤢</h2>
      </Link>
    </div>
  </React.Fragment>
)

export default NotFoundPage
