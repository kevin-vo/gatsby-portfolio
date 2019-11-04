import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./index.css"
import "../components/layout.css"

const NotFoundPage = () => (
  <React.Fragment>
    <SEO title="404: Not found" />
    <div className="main">
      <div style={{padding: "64px"}}>
        <h1 style={{fontSize: "50px"}}>404</h1>
        <h2> PAGE NOT FOUND :(</h2>
        <Link className="animated" style={{fontSize: "1.17em"}} to="/">
          <h2>
            Get me outta here! {' '}
            <span role="img" aria-label="Nauseated Face">🤢</span>
          </h2>
        </Link>
      </div>
    </div>
  </React.Fragment>
)

export default NotFoundPage
