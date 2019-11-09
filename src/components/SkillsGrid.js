import React from 'react';
import './styles/SkillsGrid.css'
import VisibilitySensor from 'react-visibility-sensor'

const onChange1 = (isVisible, id) => {
  if (isVisible) {
    document.querySelector(`.skill-cell #${id} path`).style.strokeDashoffset = 0;
    document.querySelector(`.skill-cell #${id} path`).style.strokeWidth = 0;
    if (id === "one") {
      document.querySelector(`.skill-cell #${id} path`).style.fill = "#fcd703";
    } else if (id === "two") {
      document.querySelector(`.skill-cell #${id} path`).style.fill = "#0398fc";
    } else {
      document.querySelector(`.skill-cell #${id} path`).style.fill = "#fc034e";
    }
  }
}

const SkillsGrid = () => (
  <div className="skills-container">
    <div className="skill-cell" id="first">
      <VisibilitySensor onChange={(e) => onChange1(e, "one")}>
        <svg id="one" height="48" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg>
      </VisibilitySensor>

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
      <VisibilitySensor onChange={(e) => onChange1(e, "two")}>
        <svg id="two" height="48" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/></svg>
      </VisibilitySensor>
      <h3> Development </h3>
      <p>
        I enjoy developing front-end to make beautiful things with people.
        I also love tinkering in the back-end to ensure no feature is impossible
        to implement.
      </p>
      <h4> Languages and Frameworks: </h4>
      <p>
        React, Gatsby, HTML, CSS, JS, Java, Python
      </p>
      <h4> Tools: </h4>
        <ul>
          <li>Github</li>
          <li>Atom</li>
          <li>Netlify</li>
        </ul>
    </div>
    <div className="skill-cell" id="last">
      <VisibilitySensor onChange={(e) => onChange1(e, "three")}>
        <svg id="three" height="48" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"/></svg>
      </VisibilitySensor>
      <h3> Other </h3>
        <p>
          I have an aptitude for learning by doing. I love
          jumping in the deep end and improvising as I go. In addition,
          I am passionate about
          collaborating with others to ensure that anyone who wants to
          make a web presence has the means to do so. 
        </p>
    </div>
  </div>
)

export default SkillsGrid;
