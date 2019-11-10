import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./index.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Lottie from 'react-lottie'
import * as scrollLottie from '../images/lottie/scroll.json'
import FeaturedProject from '../components/FeaturedProject'
import SkillsGrid from '../components/SkillsGrid'

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
        <Link className="animated" to="/projects/">PROJECTS</Link>
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
          to create by bringing their imagination to life.
          I love to help people push their creative boundaries by bridging
          their vision with elegant software solutions.

        </p>
        <p>
          So what do you say. Wanna make cool stuff?
        </p>
        <Link to="/contact/" className="animated" style={{fontSize: "1.17em", marginBottom: "96px"}}>Let's build something.</Link>
      </div>
    </div>
    <div className="content" id="skills">
      <div className="text">
        <h2> Here are things I am good at. </h2>
        <p>
          Technology is always moving (a little too quickly I might add!).
          In an effort to keep up, here are some skills that I have picked up
          throughout the years. I am always learning and willing to engulf
          myself with new tools. Client projects that challenge me to expand my toolbox
          are invaluable.
        </p>
      </div>
      <SkillsGrid />
    </div>
    <div className="content" id="featured-projects">
      <h2> Here are some of my recent work. </h2>
      <FeaturedProject />
    </div>
    <div className="content" id="skills">
      <div className="text">
        <h2> Let's start a conversation. </h2>
        <p>
          I am currently open to freelance projects and part/full-time positions.
          Want to hire me? Still need convincing? Want to just say hi?
          Please reach out. I would love to make your life easier.
        </p>
      </div>
      <Link to="/contact/">
        <button className="themed">Contact me</button>
      </Link>
    </div>
  </div>


)

export default IndexPage
