import React from 'react'
//import axios from "axios";
import './index.scss'
import Menu from '../../components/menu'
import Logo from '../../components/logoaloneizq'

const AboutUsPart = () => {
  return (
    <div className="aboutuspart-container">
      <div className="container text-container">
        <div className="row p-0 m-0">
          <div className="col-12">
            <span className="title">ABOUT US</span>
            <div className="subtitle">
              Putting a championship team together is not easy. You not only
              need the right players, you also need to have them in the right
              positions to achieve success on the court.
            </div>
          </div>
        </div>
      </div>
      <Menu />
      <Logo />
    </div>
  )
}

export default AboutUsPart
