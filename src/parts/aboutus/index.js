import React, {useRef, useState} from 'react'
//import axios from "axios";
import "./index.scss";
import Menu from "../../components/menu";

const AboutUsPart = () => {
    return (
        <div className="aboutuspart-container">
            <div className="container text-container">
                <div className="row p-0 m-0">
                    <div className="col-12">
                        <span className="title">
                            ABOUT US
                        </span>
                        <div className="subtitle">
                            Putting a championship team together is not easy. You not only need the right players, you also need to have them in the right positions to achieve success on the court.
                        </div>
                    </div>
                </div>
            </div>
           <Menu />
        </div>
    )
}

export default AboutUsPart;