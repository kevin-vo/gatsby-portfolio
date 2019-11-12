import React from 'react'
import Helmet from "react-helmet"
import Wallpaper from '../components/Wallpaper'
import Footer from '../components/Footer'
import ProjectsLayout from './projectsLayout'
import BlogLayout from './blogLayout'

import './styles/index.css'

export default ({ children, pageContext }) => {

  if (pageContext.layout === "projects") {
    return(
      <React.Fragment>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap" rel="stylesheet"/>
          <script src="https://kit.fontawesome.com/9cc2886e4a.js" crossorigin="anonymous"></script>
        </Helmet>
        <Wallpaper />
        <ProjectsLayout>
          {children}
        </ProjectsLayout>
        <Footer />
      </React.Fragment>
    )
  } else if (pageContext.layout === "blog") {
    return (
      <React.Fragment>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap" rel="stylesheet"/>
          <script src="https://kit.fontawesome.com/9cc2886e4a.js" crossorigin="anonymous"></script>
        </Helmet>
        <Wallpaper />
        <BlogLayout>
          {children}
        </BlogLayout>
        <Footer />
      </React.Fragment>
    )
  }
  return(
    <React.Fragment>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/9cc2886e4a.js" crossorigin="anonymous"></script>
      </Helmet>
      <Wallpaper />

      {children}
      <Footer />
    </React.Fragment>
  )
}
