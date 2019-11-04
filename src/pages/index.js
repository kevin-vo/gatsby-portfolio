import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import "./index.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Lottie from 'react-lottie'
import * as scrollLottie from '../images/lottie/scroll.json'

const scrollOptions = {
  loop: true,
  autoplay: true,
  animationData: scrollLottie.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const IndexPage = () => (
  <div className="main">
    <SEO title="Kevin Vo | Software Development" />
    <div className="content" id="home">
      <div id="logo">
        <img
          style={{margin: 0}}
          src={require("../images/kv_transparent.svg")} alt="logo"/>
      </div>
      <div className="links">
        <AnchorLink className="animated" href='#about'>ABOUT</AnchorLink>
        <br/>
        <Link className="animated" to="/">BLOG</Link>
        <br/>
        <Link className="animated" to="/">PROJECTS</Link>
        <br/>
        <Link className="animated" to="/contact/">CONTACT</Link>
      </div>
      <div className="scroll-indicator">
        <AnchorLink href="#about">
          <Lottie
            options={scrollOptions}
            height="50px"
            width="50px"
            isClickToPauseDisabled={true}/>
        </AnchorLink>
      </div>
    </div>
    <div className="content" id="about">
      <div className="text">
        <h2>I don't make things for people. I make things with people.</h2>

        <p>
          Beautiful things happen when we collaborate. I enjoy enabling others
          to create by bridging imagination with technology. I also love communicating
          with others to determine what their
          goals are, and then actualizing those goals through
          elegant software solutions. So what do you say?
        </p>
        <Link to="/contact/" className="animated" style={{fontSize: "1.17em", marginBottom: "96px"}}>Let's build something.</Link>
      </div>
    </div>
  </div>


)

export default IndexPage
