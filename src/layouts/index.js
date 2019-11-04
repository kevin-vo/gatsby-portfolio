import React from 'react'
import Lottie from 'react-lottie'
import * as rocketLottie from '../images/lottie/rocket.json'
import * as earthLottie from '../images/lottie/earth.json'
import './index.css'


const rocketOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketLottie.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const earthOptions = {
  loop: true,
  autoplay: true,
  animationData: earthLottie.default,
  speed: "20%",
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


export default ({ children }) => (
  <React.Fragment>
    <div className="wallpaper">
      <div className="background">
        <div className="earth-container">
          <Lottie
            options={earthOptions}/>
        </div>
        <div className="rocket-container">
          <Lottie
            width="175px"
            height="237.5px"
            options={rocketOptions}/>
        </div>
      </div>
    </div>

    {children}
  </React.Fragment>
);
