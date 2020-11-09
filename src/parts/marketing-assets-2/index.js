import React from 'react'
import './index.scss'
import Pc from '../../assets/images/pc-frame.png'
import Kl1 from '../../assets/images/klipsch1.jpg'
import Kl2 from '../../assets/images/klipsch2.jpg'
import Valdez from '../../assets/images/valdezpage.jpg'
const MarketingAssets2 = () => {
  return (
    <div className="marketing-assets-2-container ">
      <div className="d-flex flex-column-reverse flex-lg-row-reverse content-container">
        <div className="text">
          <div className="text-container">
            <h3>GOOGLE ADS</h3>{' '}
            <div>
              A great way to use Google’s massive reach to generate brand
              awareness. With a wide range of targeting and flexibility at any
              budget, they are a great tool to generate traffic and conversions.
            </div>
          </div>
        </div>
        <div className="pc">
          <img src={Pc} alt="pc" className="pc-frame" />
          <div className="slider-container">
            <img src={Valdez} alt="Valdez" className="slider" />
            <img src={Kl1} alt="kl1" className="slider" />
            <img src={Kl2} alt="kl2" className="slider" />

            {/* <img src={Kl2} alt="kl2" className="slider" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingAssets2
