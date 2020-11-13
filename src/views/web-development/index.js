import React from 'react'
import './index.scss'
import Contact from '../../parts/contact/'
import Footer from '../../parts/footer/'
import WevDevelopment from '../../parts/web-development-1'
import WevDevelopment2 from '../../parts/web-development-2'
const WebDev = () => {
  return (
    <div className="web-dev-master-container">
      <WevDevelopment />
      <WevDevelopment2 />
      <Contact />
      <Footer />
    </div>
  )
}

export default WebDev
