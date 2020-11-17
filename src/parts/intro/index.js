import React from 'react'
import './index.scss'
import Ball from '../../assets/images/ball.png'
import LogoText from '../../assets/images/logo-6thman-text.png'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="intro">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <img alt="ball" src={Ball} className="animated-ball" />
            <img alt="ball" src={Ball} className="animated-ball-min" />
          </div>
          <div className="col-12 col-md-6 intro-container">
            <div className="intro-text">
              <img alt="6thman" src={LogoText} className="intro-logo" />
              <div className="intro-explain">
                [Siksth-Man] - Noun / Basketball term
              </div>
              <div className="intro-content">
                “A player who is not a starter but comes off the bench and is
                the first to be substituted in the game. A multifaceted player
                who can play multiple positions, and often plays minutes equal
                to or exceeding some of the starters and posts similar
                statistics. Hence his high value to the performance of a team.”
              </div>
            </div>
            <div className="intro-button-container">
              <Link to="/ourteam">
                <span className="intro-button">ABOUT OUR TEAM</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
