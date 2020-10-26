import React, {useRef, useState} from 'react'
import axios from "axios";
import "./index.scss";
import C1 from "../../assets/images/Logos-Klipsch.png";
import C2 from "../../assets/images/Logos-Wpromote.png";
import C3 from "../../assets/images/Logos-BevMo.png";
import C4 from "../../assets/images/Logos-CotéHair.png";
import C5 from "../../assets/images/Logos-Zenni.png";
import C6 from "../../assets/images/Logos-Event360.png";

const Clients = () => {
    const first = useRef(null);
    const last = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const about = useRef(null);

    const [userMsg, setUserMsg] = useState('');

    const send = ()=>{
        if (
            first !== null &&
            last !== null &&
            email !== null &&
            about !== null &&
            email.current.value.length !== 0
          ){
            const myBodyEmail = `
            Firstname: ${first.current.value}
            LastName: ${last.current.value}
            Phone: ${phone.current.value}
            Email: ${email.current.value}

            Msg:
            ${about.current.value}
            `;

            let dataSend = {
                name: first.current.value,
                email: email.current.value,
                message: myBodyEmail,
              };

              //sending data
      axios
      .post("http://carloscruz85.com/mail.php", dataSend)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
            setUserMsg( 'Message sent in a moment we will contact you' )
        } else if (response.data.status === "fail") {
            setUserMsg( 'There was an error sending the message, please try again' )
        }
      }); 
    }else{
        setUserMsg( 'Be sure to fill in all the fields ' )
    }
}

    return (
        <div className="contact-container ">
            <div className="title">
                COMING OFF THE BENCH
            </div>
            <div className="subtitle">
                CONTACT US
            </div>
            <div className="container">
                <div className="row">
                    
                   <div className="col-12 col-lg-6">
                        <div className="row">
                            <div className="col-12 intro-form">
                                Ready for us to come and play for you?<br /> Let us know how we can help with your creative project.
                            </div>
                            <div className="col-6">
                                <input ref={first} type="text" placeholder="first"/>
                            </div>
                            <div className="col-6">
                                <input ref={last} type="text" placeholder="Last"/>
                            </div>
                            <div className="col-12">
                                <input ref={email} type="text" placeholder="Email"/>
                            </div>
                            <div className="col-12">
                                <input ref={phone} type="text" placeholder="Phone (optional) "/>
                            </div>
                            <div className="col-12">
                                <textarea ref={about} className="about" placeholder="About Your Project"></textarea>
                            </div>
                            <div className="col-12">
  
                                <span className="button" onClick={()=>{
                                    send()
                                }}>
                                    PASS US THE BALL
                                </span>
    
                            </div>
                            {
                                userMsg.length !== 0 ?                             <div className="msg">
                                {userMsg}
                            </div> : null
                            }

                        </div>
                   </div>
                    <div className="col-12 col-lg-6">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;