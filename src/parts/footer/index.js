import React from 'react'
import "./index.scss";
import Logo from "../../assets/images/6thman-logo.png";
import Fb from "../../assets/images/fb.png";
import Ins from "../../assets/images/ins.png";
import In from "../../assets/images/in.png";
import Be from "../../assets/images/be.png";
import Pi from "../../assets/images/pi.png";

const Footer = () => {

    const year = new Date().getFullYear();

    const items = [
        {name: 'ABOUT US', link: ''},
        {name: 'OUR WORK', link: ''},
        {name: 'OUR TEAM', link: ''},
        {name: 'SERVICES', link: ''},
        {name: 'CONTACT', link: ''}
    ]

    const sm = [
        {name: 'facebook', link: '', icon: Fb},
        {name: 'instagram', link: '', icon: Ins},
        {name: 'linked in', link: '', icon: In},
        {name: 'behance', link: '', icon: Be},
        {name: 'pinterest', link: '', icon: Pi},
    ]

    const goTop = ()=>{
        window.scrollTo(0, 0)
    }
    return (
        <div className="footer-container">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 text-center logo-container">
                    <img src={Logo} alt="logo" className="logo"/>
                </div>
                <div className="col-lg-4 move">
                    <ul>
                        {
                            items.map( (d, i)=>{
                                return <li key={i}>{d.name}</li>
                            } )
                        }
                    </ul>
                </div>  
                <div className="col-lg-4 move">
                    <ul>
                        {
                            sm.map( (d, i)=>{
                                return <li key={i}>
                                    <img src={d.icon} alt={d.name} /> {d.name}
                                </li>
                            } )
                        }
                    </ul>
                </div>  
                </div>
            </div>
    
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            ©{year} 6th Man Creative. All Rights Reserved. Muffin Group
                        </div>
                        <div className="col-4 arrow" onClick={()=>{ goTop() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                        </div>
                        <div className="col-4">
                            
                        </div>
                    </div>
                </div>
            </div>
               
        </div>
    )
}

export default Footer;