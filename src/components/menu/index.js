import React, {useState} from "react";
import "./index.scss";
import Trigger from "../../assets/images/menu.png";

const Menu = () => {
    const [trigger, setTrigger] = useState(true);
    const items = [
        {name: 'ABOUT US', link: ''},
        {name: 'OUR WORK', link: ''},
        {name: 'SERVICES', link: ''},
        {name: 'CONTACT', link: ''}
    ]
    return <div>
        <div className="max-menu">
                <ul>
                    {
                        items.map( (d, i)=>{
                            return <li key={i}>{d.name}</li>
                        } )
                    }
                </ul>
        </div>
        <div className="min-menu">
            {trigger ? 
            <div className="trigger" onClick={()=>{setTrigger(false)}}>
                <img src={Trigger} />
            </div> :    
            <div className="min-menu-items">
                <ul>
                    {
                        items.map( (d, i)=>{
                            return <li key={i}>{d.name}</li>
                        } )
                    }
                    <li onClick={()=>{setTrigger(true)}}>
                        Close menu
                    </li>
                </ul>
            </div>}
        </div>
    </div>
    
 
}

export default Menu;