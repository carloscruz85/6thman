import React from 'react'
import './index.scss'
import Cel from '../../assets/images/cel-frame.png'
import Menu from '../../components/menu'
import Logo from '../../components/logoaloneizq'
// import ReactPlayer from 'react-player'

const MarketingAssetsTop = () => {
  return (
    <div className="marketing-assets-top-container">
      <div className="container">
        {/* intro */}
        <div className="row intro-row">
          <div className="col-12 text-center">
            <p className="title">MARKETING ASSETS</p>
            <div className="content-container">
              <div className="content">
                Powerful, innovative and diverse, these creative assets are a
                great way to promote your brand across the multiple platforms in
                the marketing world.
              </div>
            </div>
          </div>
        </div>
        {/* intro */}
        <div className="center-center">
          <div className="d-flex flex-column-reverse flex-lg-row animations-container ">
            {/* text */}
            <div className="row ma-text-container">
              <div className="col-12 center-center ">
                <h3>SOCIAL ASSETS </h3>
                <div className="text-social-assets">
                  Probably the most popular form of promotion in todays digital
                  age. These are highly effective ads that push your brand
                  forward by creating familiarity, trust and recognition.
                </div>
              </div>
            </div>
            {/* text */}
            {/* animations */}
            <div className="row ma-media-container">
              <div className="col-8 col-sm-8 ">
                <div className="media-resizes">
                  <video autoPlay muted loop>
                    <source
                      src="https://6thman.us/media/animation2.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <video autoPlay muted loop>
                    <source
                      src="https://6thman.us/media/Master_1920x1040_c_name.mp4"
                      type="video/mp4"
                    />
                  </video>
                  {/* <iframe src="https://6thman.us/media/howarts.htm" title="Animation" scrolling="no"></iframe>    */}
                  {/* 
                              <div class="container">
                <iframe class="responsive-iframe" src="https://6thman.us/media/howarts.htm"></iframe>
              </div>
                              */}
                </div>
              </div>
              <div className="col-4 col-sm-4">
                <div className="cel-frame">
                  <img src={Cel} alt="cel" />

                  <video autoPlay muted loop>
                    <source
                      src="https://6thman.us/media/animation3.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            {/* animations */}
          </div>
        </div>
      </div>

      <Menu />
      <Logo />
    </div>
  )
}

export default MarketingAssetsTop
