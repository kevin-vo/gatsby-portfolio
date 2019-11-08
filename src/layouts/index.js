import React from 'react'
import Helmet from "react-helmet"
import Wallpaper from '../components/Wallpaper'
import Footer from '../components/Footer'

import './index.css'

export default ({ children }) => (
  <React.Fragment>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/9cc2886e4a.js" crossorigin="anonymous"></script>
    </Helmet>
    <Wallpaper />

    {children}
    <Footer />
  </React.Fragment>
);
