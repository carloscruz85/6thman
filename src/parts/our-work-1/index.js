import React from 'react'
import './index.scss'
// import Cel from '../../assets/images/cel-frame.png'
import Menu from '../../components/menu'
import Logo from '../../components/logoaloneizq'

const OurWork1 = () => {
  return (
    <div className="aboutuspart-container">
      <div className="container text-container">
        <div className="row p-0 m-0">
          <div className="col-12">
            <span className="title">OUR WORK</span>
            <div className="subtitle">
              We know it’s not enough to tell you how good we play. We need to
              show you. Please browse and examine a sample of some of the
              creative projects we have done for previous satisfied clients.
            </div>
          </div>
        </div>
      </div>
      <Menu />
      <Logo />
    </div>
  )
}

export default OurWork1
