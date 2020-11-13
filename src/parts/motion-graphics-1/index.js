import React, { useRef, useState } from 'react'
import './index.scss'
import Menu from '../../components/menu'
import Logo from '../../components/logoaloneizq'
import Tv from '../../assets/images/tv-on.png'

const MotionGraphics = () => {
  return (
    <div className="motion-graphics-container ">
      <div className="master-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="title">MOTION GRAPHICS / ANIMATION</span>
            </div>
          </div>
        </div>

        <div className="animation-master-container">
          <div className="animation-container">
            <div className="text">
              <div className="text-container">
                <p>
                  There’s no better way to display, express, or promote your
                  brand’s message than with a visually stunning animated video.
                  A great alternative and more cost effective than its
                  traditional life filming counterpart.
                </p>
                <p className="no-opa">
                  <ul>
                    <li>Explain complex ideas quickly</li>
                    <li>Visually appealing</li>
                    <li>Easy to upgrade</li>
                    <li>Bring your vision to life</li>
                  </ul>
                </p>
                <p>
                  Interested? Please visit our landing page for more information
                </p>
                <p>CLICK HERE</p>
              </div>
            </div>
            <div className="tv">
              <img src={Tv} alt="tv" className="tv-frame" />
              <video autoPlay muted loop className="video">
                <source
                  src="https://6thman.us/media/Master_1920x1040_c_name.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        {/* <div className="motion-media-container ">
          <div className="d-flex flex-column-reverse flex-lg-row-reverse content-container">
            <div className="pc">
              <img src={Tv} alt="pc" className="pc-frame" />
              <div className="slider-container">
                <video autoPlay muted loop className="slider">
                  <source
                    src="http://carloscruz85.com/6thman/media/Master_1920x1040_c_name.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <div className="text">
              <div className="text-container">
                <p>
                  There’s no better way to display, express, or promote your
                  brand’s message than with a visually stunning animated video.
                  A great alternative and more cost effective than its
                  traditional life filming counterpart.
                </p>
                <p className="no-opa">
                  <ul>
                    <li>Explain complex ideas quickly</li>
                    <li>Visually appealing</li>
                    <li>Easy to upgrade</li>
                    <li>Bring your vision to life</li>
                  </ul>
                </p>
                <p>
                  Interested? Please visit our landing page for more information
                </p>
                <p>CLICK HERE</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <Menu />
      <Logo />
    </div>
  )
}

export default MotionGraphics
