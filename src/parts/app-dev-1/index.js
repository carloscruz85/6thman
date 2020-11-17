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
              <span className="title">APP DEVELOPMENT</span>
              <div className="intro-aux"></div>
            </div>
          </div>
        </div>
        {/* content */}
      </div>

      <Menu />
      <Logo />
    </div>
  )
}

export default BrandDev
