import React from 'react'
import './index.scss'
import Menu from '../../components/menu'
import Logo from '../../components/logoaloneizq'
import BrandImg1 from '../../assets/images/brand1.jpg'
import BrandImg2 from '../../assets/images/brand2.jpg'

const BrandDev = () => {
  return (
    <div className="brand-dev-container ">
      <div className="master-brand-dev-container">
        {/* intro text */}
        <div className="container">
          <div className="row intro-brand-dev">
            <div className="col-12">
              <span className="title">BRAND DEVELOPMENT</span>
              <div className="intro-aux">
                The very core of your business, your brand represents more than
                what you do… it says why you do it. 6th Man will help you tell
                your brand’s story through innovative and creative design
                solutions that will generate value, trust and recognition.
              </div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={BrandImg1} alt="Brand" className="brand-img" />
            </div>
            <div className="col-12 col-md-6">
              <img src={BrandImg2} alt="Brand" className="brand-img" />
            </div>
          </div>
        </div>
      </div>

      <Menu />
      <Logo />
    </div>
  )
}

export default BrandDev
