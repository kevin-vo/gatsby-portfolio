import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Logo from "../components/logo"
import "./index.css"
import Background from "../components/background"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Kevin Vo | Software Development" />
    <Background/>
    <div className="content" id="main">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap" rel="stylesheet"/>
      </Helmet>
      <div id="logo">
        <Logo/>
      </div>
      <div className="links">
        <AnchorLink href='#about'>ABOUT</AnchorLink>
        <br/>
        <Link to="/">BLOG</Link>
        <br/>
        <Link to="/">PROJECTS</Link>
        <br/>
        <AnchorLink href='#about'>CONTACT</AnchorLink>
      </div>
      <div id="about">
      </div>
    </div>
  </React.Fragment>

)

export default IndexPage
