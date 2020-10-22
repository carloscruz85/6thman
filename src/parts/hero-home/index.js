import React from 'react'
import "./index.scss";
import Logo from "../../assets/images/logo-6thman.png";
import Menu from "../../components/menu";

const Hero = () => {
    return (
        <div className=" hero ball-alone">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 view-responsive">
                    <img src={Logo} className="main-logo"/>
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
            </div>
        </div>
    )
}

export default Hero;