import React from 'react'
import "./index.scss";
import Guillermo from "../../assets/images/BioPhoto-Guillermo.jpg";
import Rodrigo from "../../assets/images/BioPhoto-Rodrigo.jpg";

const AboutUsTeam = () => {
    return (
        <div className="about-us-team-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img src={Rodrigo} alt="Rodrigo" />
                        <div className="title">
                            RODRIGO PEREZ
                        </div>
                        <div className="subtitle">
                            CEO / Founder
                        </div>
                        <div className="content">
                            20+ years of experience in product design & development, branding, and marketing, and have managed large creative teams. Throughout his career, Rodrigo has always married his creative heart with a business brain, maintaining a focus on driving performance through design.
                        </div>
                    </div>
                    <div className="col-12  col-sm-6">
                        <img src={Guillermo} alt="Guillermo" />
                        <div className="title">
                            GUILLERMO ORTIZ
                        </div>
                        <div className="subtitle">
                            Executive Creative Director
                        </div>
                        <div className="content">
                            With more than 12 years of experience in marketing and strategic advertising, Memo has managed many campaigns for major brands in North, Central and South America. Over the years he has won multiple awards for his input across the industry. He is one of the most current and groundbreaking creatives in the field.
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutUsTeam;