import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Trigger from '../../assets/images/menu.png'

const Menu = () => {
  const [trigger, setTrigger] = useState(true)
  const items = [
    { name: 'HOME', link: '/' },
    { name: 'OUR TEAM', link: '/ourteam' },
    { name: 'OUR WORK', link: '/ourwork' },
    // { name: 'SERVICES', link: '' },
    { name: 'CONTACT', link: 'contact' },
  ]
  return (
    <div>
      <div className="max-menu">
        <ul>
          {items.map((d, i) => {
            return (
              <li key={i}>
                <Link to={d.link}>{d.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="min-menu">
        {trigger ? (
          <div
            className="trigger"
            onClick={() => {
              setTrigger(false)
            }}
          >
            <img alt="menu" src={Trigger} />
          </div>
        ) : (
          <div className="min-menu-items">
            <ul>
              {items.map((d, i) => {
                return (
                  <li key={i}>
                    {' '}
                    <Link to={d.link}>{d.name}</Link>
                  </li>
                )
              })}
              <li
                onClick={() => {
                  setTrigger(true)
                }}
              >
                Close menu
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
