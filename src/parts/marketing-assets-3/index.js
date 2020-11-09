import React from 'react'
import './index.scss'
import Pc from '../../assets/images/pc-frame.png'
import Info from '../../assets/images/infographic.jpg'

const MarketingAssets3 = () => {
  return (
    <div className="marketing-assets-3-container ">
      <div className="d-flex flex-column flex-lg-row-reverse content-container">
        <div className="pc">
          <img src={Pc} alt="pc" className="pc-frame" />
          <div className="image-container">
            <img src={Info} alt="Info" className="innerimage" />
          </div>
        </div>
        <div className="text">
          <div className="text-container">
            <h3>INFOGRAPHICS</h3>{' '}
            <div>
              Combining written explanations and appealing visual elements in an
              organized fashion, infographics are a great way to explain
              concepts, simplify procedures, and creating a better understanding
              of your brand’s message.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketingAssets3
