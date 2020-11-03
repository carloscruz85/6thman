import React from 'react'
import "./index.scss";
import Logo from "../../assets/images/logo-6thman.png";
import Menu from "../../components/menu";

const Hero = () => {
    return (
        <div className=" hero ball-alone">
            <div className="container-fluid">
                <div className="row p-0 m-0">
                <div className="col-12 view-responsive">
                    <img alt="6thman" src={Logo} className="main-logo"/>
                    <div className="big-title">
                    <div>
                    EVERY TEAM NEEDS 
                    </div>
                    <div>
                    &#160;A GREAT BENCH
                    </div>
                    </div>
                    <div className="paragraph">
                    We’ll come on the court and support your team’s efforts in the highly competitive marketing world by providing innovative solutions for your creative needs. Let us come play for you and help you achieve your brand’s vision.
                    </div>
                </div>
                </div>
                <Menu />

                    <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                    </div>

            </div>
        </div>
    )
}

export default Hero;