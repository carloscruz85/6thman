import React from 'react'
import "./index.scss";
import Ca from "../../assets/images/ca.png";
import Sv from "../../assets/images/sv.png";

const History = () => {
    return (
        <div className="history-container">
            <div className="pre-maps-container">
                <div className="maps-container">
                    <img src={Ca} className="ca" alt="Central America"/>
                    <img src={Sv} className="sv" alt="El Salvador"/>
                </div>

            </div>
            <div className="history-text-container">
                <div className="relative first-text">
                    <div className="title">
                        A Little History
                    </div>
                    <div className="subtitle">
                        The Journey
                    </div>
                    <div className="opacity-text basic-text">
                        6th Man Creative was born as a dream to provide Central American talent the opportunity to work with clients in the U.S. market. Our founder, an immigrant from the small country of El Salvador, wanted to find a way to give back to his community. So he took it upon himself to go to Central America and find highly talented folks in the creative field.
                        <div className="special-text">
                        He was delighted when he discovered amazing, talented, motivated people doing incredible work at the highest levels on all creative fields.
                        </div>
                    </div>
                </div>
                <div className="relative second-text basic-text">
                    <div className="opacity-text">
                        Impressed by the quality of the work, our founder decided to put together a team of highly skilled professionals to fulfill any marketing creative need. And so, 6th Man Creative was born. Operating out of Redondo Beach, CA in the US, 6th Man Creative continues its efforts to bring forth Latin American talent in the creative field.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;