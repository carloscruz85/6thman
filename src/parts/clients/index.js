import React from 'react'
import "./index.scss";
import C1 from "../../assets/images/Logos-Klipsch.png";
import C2 from "../../assets/images/Logos-Wpromote.png";
import C3 from "../../assets/images/Logos-BevMo.png";
import C4 from "../../assets/images/Logos-CotéHair.png";
import C5 from "../../assets/images/Logos-Zenni.png";
import C6 from "../../assets/images/Logos-Event360.png";
const Clients = () => {

    return (
        <div className="clients-container ">
            <div className="title">
                TEAMS WE’VE PLAYED FOR
            </div>
            <div className="subtitle">
                CLIENTS
            </div>
            <div className="container">
                <div className="row">
                    {
                        [C1,C2,C3,C4,C5,C6].map( (c,i) => {
                            return (
                                <div className="col-6 col-md-4">
                                    <img src={c} />
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    )
}

export default Clients;