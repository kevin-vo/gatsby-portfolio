import React, {Component} from 'react'
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
  maxWidth: "1080px",
  height: "100%",
  width: "100%",
}


class Header extends Component {

  render() {
    return (
      <div style={headerStyle}>
        <div className="header-container" style={contentStyle}>
          <Link to="/">
            <img
              style={{margin: 0, height: "100%"}}
              src={require("../images/kv_transparent.svg")} alt="logo"/>
          </Link>

          <div style={{height: "100%", float: "right", display: "flex", alignItems: "center"}}>
            <Link to="/" style={{color: "white"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
