import React, { Component } from 'react'
import Lottie from 'react-lottie'
import * as rocketLottie from '../images/lottie/rocket.json'
import * as earthLottie from '../images/lottie/earth.json'
import './background.css'

class Background extends Component {

  rocketOptions = () => {
    return({
      loop: true,
      autoplay: true,
      animationData: rocketLottie.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    })
  };

  earthOptions = () => {
    return({
      loop: true,
      autoplay: true,
      animationData: earthLottie.default,
      speed: "20%",
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    })
  };

  render() {
    return (
      <React.Fragment>
        <div className="wallpaper"></div>
        <div className="background">
          <div className="earth-container">
            <Lottie
              options={this.earthOptions()}/>
          </div>
          <div className="rocket-container">
            <Lottie
              width="175px"
              height="237.5px"
              options={this.rocketOptions()}/>
          </div>
        </div>

      </React.Fragment>
    );
  }

}

export default Background;
