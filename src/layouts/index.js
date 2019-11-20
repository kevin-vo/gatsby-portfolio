import React from 'react'
import Wallpaper from '../components/Wallpaper'
import Footer from '../components/Footer'
import ProjectsLayout from './projectsLayout'
import BlogLayout from './blogLayout'

import './styles/index.css'

export default ({ children, pageContext }) => {

  if (pageContext.layout === "projects") {
    return(
      <React.Fragment>
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
      <Wallpaper />

      {children}
      <Footer />
    </React.Fragment>
  )
}
