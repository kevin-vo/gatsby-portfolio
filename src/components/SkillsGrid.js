import React, { Component } from 'react';
import './styles/SkillsGrid.css'


class SkillsGrid extends Component {

  render() {
    return (
      <div className="skills-container">
        <div className="skill-cell" id="first">
          <svg id="one" height="48" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"/></svg>

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
          <svg id="two" height="48" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/></svg>
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
          <svg id="three" height="48" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"/></svg>
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
                <li>Lots of Google searches</li>
              </ul>
        </div>
      </div>

    );
  }
}

export default SkillsGrid;
