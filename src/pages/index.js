import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import "./index.css"
import Background from "../components/background"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Kevin Vo | Software Development" />
    <Background/>
    <div id="content">
      <div id="logo">
        <Image />
      </div>
      <h1>Hi people</h1>
    </div>    
  </React.Fragment>

)

export default IndexPage
