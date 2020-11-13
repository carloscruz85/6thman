import React from 'react'
import './index.scss'
import Pc from '../../assets/images/pc-frame.png'
import Landing from '../../assets/images/WebDev-scroll-LandingPage.jpg'

const WebDev2 = () => {
  return (
    <div className="marketing-assets-3-container ">
      <div className="d-flex flex-column flex-lg-row-reverse content-container">
        <div className="pc">
          <img src={Pc} alt="pc" className="pc-frame" />
          <div className="image-container">
            <img src={Landing} alt="Info" className="innerimage" />
          </div>
        </div>
        <div className="text">
          <div className="text-container">
            <h3>LANDING PAGES </h3>{' '}
            <div>
              With their single goal approach, landing pages are a great way to
              promote a specific message, service, event or product. They
              increase conversion, generate data, grow your email list and
              improve brand awareness.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDev2
