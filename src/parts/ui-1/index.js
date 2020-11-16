import React, { useRef, useState } from 'react'
import './index.scss'
import Menu from '../../components/menu'
import Logo from '../../components/logoaloneizq'
// import CelFrame from '../../assets/images/cel-frame.png'

const MotionGraphics = () => {
  return (
    <div className="ui-container ">
      <div className="master-ui-container">
        {/* intro text */}
        <div className="container">
          <div className="row intro-ui">
            <div className="col-12">
              <span className="title">UI / UX DESIGN</span>
            </div>
          </div>
        </div>
        {/* animation */}
        <div className="ui-animation-container">
          <div className="ui-inner-container">
            <div className="ui-text">
              <div className="ui-text-container">
                If you are considering building an App, quality UI/UX is
                essential to create confidence and trust in your services, and
                your brand. With an “End User” mind set, we’ll design an easy to
                use app with intuitive interaction that is also visually
                pleasing, therefore creating comfort and satisfaction for your
                users.
              </div>
            </div>
            <div className="ui-animation">
              <video autoPlay muted loop className="ui-video">
                <source
                  src="https://6thman.us/media/UI_UX-Vid.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <Menu />
      <Logo />
    </div>
  )
}

export default MotionGraphics
