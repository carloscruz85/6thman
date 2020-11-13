import React from 'react'
import './index.scss'
import Contact from '../../parts/contact/'
import Footer from '../../parts/footer/'
import MotionGraphics1 from '../../parts/motion-graphics-1'

const MotionGraphics = () => {
  return (
    <div className="web-dev-master-container">
      <MotionGraphics1 />
      <Contact />
      <Footer />
    </div>
  )
}

export default MotionGraphics
