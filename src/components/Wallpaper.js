import React, { Component } from 'react';
import Lottie from 'react-lottie'
import * as rocketLottie from '../images/lottie/rocket.json'
import * as earthLottie from '../images/lottie/earth.json'

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

var ticking = false;

class Wallpaper extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        document.getElementById("rocket-container").style.bottom = 128 + (0.4 * document.documentElement.scrollTop) + "px";
        document.getElementById("earth-container").style.bottom = 64 + (-0.05 * document.documentElement.scrollTop) + "px";
        document.getElementById("earth-container").style.width = 100 + (-0.07 * document.documentElement.scrollTop) + "px";
        document.getElementById("earth-container").style.height = 100 + (-0.07 * document.documentElement.scrollTop) + "px";
        ticking = false;
      });
      ticking = true;
    }
  };

  render() {
    return (
      <div id="wallpaper">
        <div className="background">
          <div id="earth-container">
            <Lottie
              options={earthOptions}/>
          </div>
          <div id="rocket-container">
            <Lottie
              width="175px"
              height="237.5px"
              options={rocketOptions}/>
          </div>
        </div>
      </div>
    );
  }

}

export default Wallpaper;
