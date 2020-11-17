import React from 'react'
import './index.scss'
import Foco from '../../assets/images/foco.png'
import Atom from '../../assets/images/atom.png'
import Pc from '../../assets/images/pc.png'
import Msg from '../../assets/images/msg.png'
import Pluma from '../../assets/images/pluma.png'
import Cel from '../../assets/images/cel.png'
import { Link } from 'react-router-dom'

const Positions = () => {
  const positionsA = [
    {
      title: 'Brand development',
      icon: Foco,
      link: 'branddevelopment',
    },
    {
      title: 'Motion Graphics',
      icon: Atom,
      link: 'motiongraphics',
    },
    {
      title: 'Web development',
      icon: Pc,
      link: 'webdevelopment',
    },
    {
      title: 'UI/UX Design',
      icon: Msg,
      link: 'uiuxdesign',
    },
    {
      title: 'App Development',
      icon: Cel,
      link: 'appdev',
    },
    {
      title: 'Marketing assets',
      icon: Pluma,
      link: 'marketingassets',
    },
  ]

  // const positionsB = [
  //     {
  //         title: 'UI/UX Design',
  //         icon: Msg
  //     },
  //     {
  //         title: 'Marketing assets',
  //         icon: Pluma
  //     }
  // ]

  return (
    <div className="positions-container">
      <div className="positions-title">POSITIONS WE PLAY</div>
      <div className="positions-subtitle">SERVICES</div>
      <div className="positions-services">
        <div className="container-fluid">
          <div className="row">
            {positionsA.map((d, i) => {
              const titleSpace = d.title.split(' ')
              //console.log(titleSpace);
              return (
                <div
                  key={i}
                  className="col-6 col-md-4 positions-item item-container"
                >
                  <Link to={d.link}>
                    <div className="example">
                      <div className="item-title hover hover-f1 hover-3 ">
                        <img alt="icon" src={d.icon} className="icon" />
                      </div>
                    </div>
                    <div className="positions-title-inner">
                      {titleSpace[0]} <br /> {titleSpace[1]}
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
          {/* <div className="row justify-content-md-center">
                    {
                            positionsB.map( (d,i) =>{
                                const titleSpace = d.title.split(' ');
                                console.log(titleSpace);
                                return(
                                    <div className="col-4 positions-item item-container">
                                    <div className="example">
                                        <div className="item-title hover hover-f1 hover-3 ">
                                            <img src={d.icon} className="icon"/>
                                        </div>
                                    </div>
                                    <div className="positions-title-inner">
                                     {titleSpace[0]} <br /> {titleSpace[1]}
                                    </div>
                                </div>
                                )
                            } )
                        }   
                    </div> */}
        </div>
        <div className="intro-button-container">
          {/* /ourteam */}
          <Link to="/ourteam">
            <span className="intro-button">VIEW OUR WORK</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Positions
