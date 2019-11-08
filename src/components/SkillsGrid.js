import React from 'react';
import './styles/SkillsGrid.css'

const SkillsGrid = () => (
  <div className="skills-container">
    <div className="skill-cell" id="first">
      <h3> Design </h3>
      <p>
        I value clean, content-driven design. My mission is to provide
        simple user interaction through accessible medium.
      </p>
      <br/>
      <h4> Things I design: </h4>
      <p>
        UI, UX, Websites, Apps, Logos, Mockups
      </p>
      <h4> Tools: </h4>
      <ul>
        <li>Photoshop</li>
        <li>Figma</li>
        <li>Adobe XD</li>
        <li>Pen and Paper</li>
      </ul>
    </div>
    <div className="skill-cell">
      <h3> Development </h3>
      <p>
        I enjoy developing front-end to make beautiful things with people.
        I also love tinkering in the back-end to ensure no feature is impossible
        to implement.
      </p>
      <h4> Languages and Frameworks: </h4>
      <p>
        React, Gatsby, HTML, JS, Java, Python
      </p>
      <h4> Tools: </h4>
        <ul>
          <li>Github</li>
          <li>Atom</li>
          <li>Netlify</li>
        </ul>
    </div>
    <div className="skill-cell" id="last">
      <h3> Other </h3>
        <p>
          I have an aptitude for learning by doing. I love
          jumping in the deep end and improvising as I go. It's quick, it's
          dirty, but I get the job done. In addition, I am passionate about
          collaborating with others to ensure that the cloud is accessible
          for anyone and everyone.
        </p>
        <h4> Tools: </h4>
          <ul>
            <li>Lots of Google Searching</li>
            <li>StackOverflow</li>
          </ul>
    </div>
  </div>
)

export default SkillsGrid;
