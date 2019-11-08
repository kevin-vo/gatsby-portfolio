import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./index.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Lottie from 'react-lottie'
import * as scrollLottie from '../images/lottie/scroll.json'
import FeaturedProject from '../components/FeaturedProject'

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
        <Link className="animated" to="/">BLOG</Link>
        <Link className="animated" to="/">PROJECTS</Link>
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
    <div className="content" id="skills">
      <div className="text">
        <h2> Here are things I am good at. </h2>
        <p>
          Technology is always moving (quicker than me, I will admit!).
          In an effort to keep up, here are some skills that I have picked up
          throughout the years. I am always learning and willing to engulf
          myself with new tools. Client projects that challenge me to expand my toolbox
          are invaluable.
        </p>
      </div>
    </div>
    <div className="content" id="featured-projects">
      <h2> Here are some of my recent work. </h2>
      <FeaturedProject />
    </div>
  </div>


)

export default IndexPage
