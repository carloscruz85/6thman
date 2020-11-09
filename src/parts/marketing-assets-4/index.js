import React from 'react'
import './index.scss'
import Pc from '../../assets/images/tvbox.png'
import M1 from '../../assets/images/merch1.jpg'
import M2 from '../../assets/images/merch2.jpg'
import M3 from '../../assets/images/merch3.jpg'
import M4 from '../../assets/images/merch4.jpg'

const MarketingAssets4 = () => {
  return (
    <div className="marketing-assets-4-container ">
      <div className="d-flex flex-column-reverse flex-lg-row-reverse content-container">
        <div className="text">
          <div className="text-container">
            <h3>PACKAGING & MERCHANDISING</h3>{' '}
            <div>
              Your package is your product’s first physical interaction with
              your customer. It needs to be a representation of your brand’s
              quality. Merchandise is great way to promote your brand. Quality
              merchandise creates brand recognition and can even generate
              revenue. Let’s create some great designs to tell your brand’s
              story.
            </div>
          </div>
        </div>
        <div className="pc">
          <img src={Pc} alt="pc" className="pc-frame" />
          <div className="slider-container">
            <img src={M4} alt="Merch" className="slider" />
            <img src={M1} alt="Merch" className="slider" />
            <img src={M2} alt="Merch" className="slider" />
            <img src={M3} alt="Merch" className="slider" />

            {/* <img src={Kl2} alt="kl2" className="slider" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingAssets4
