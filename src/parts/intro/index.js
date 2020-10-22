import React from 'react'
import "./index.scss";
import Logo from "../../assets/images/6thman-logo.png";
import Menu from "../../components/menu";
import Ball from "../../assets/images/ball.png";
import LogoText from "../../assets/images/logo-6thman-text.png";

const Intro = () => {
    return (
        <div className="intro">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 ">
                        <img src={Ball} className="animated-ball" />
                        <img src={Ball} className="animated-ball-min" />
                    </div>
                    <div className="col-12 col-md-6 intro-container">
                        <div className="intro-text">
                            <img src={LogoText} className="intro-logo"/>
                            <div className="intro-explain">
                                [Siksth-Man] - Noun / Basketball term
                            </div>
                            <div className="intro-content">
                                “A player who is not a starter but comes off the bench and is the first to be substituted in the game. A multifaceted player who can play multiple positions, and often plays minutes equal to or exceeding some of the starters and posts similar statistics. Hence his high value to the performance of a team.”
                            </div>
                        </div>
                        <div className="intro-button-container">
                            <span className="intro-button">
                                ABOUT OUR TEAM
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;