import React from 'react'
import { Link } from "gatsby"

const headerStyle = {
  height: "100px",
  paddingTop: "16px",
  paddingBottom: "16px",
  borderBottom: "2px solid white",
  display: "flex",
  justifyContent: "center",
}

const contentStyle = {
  padding: "0 64px 0 64px",
  maxWidth: "1080px",
  height: "100%",
  width: "100%",
}

const Header = () => (
  <div style={headerStyle}>
    <div style={contentStyle}>
      <Link to="/">
        <img
          style={{margin: 0, height: "100%"}}
          src={require("../images/kv_transparent.svg")} alt="logo"/>
      </Link>
      <h1 style={{float: "right"}}>x</h1>
    </div>
  </div>
)

export default Header;
