import React,{useState} from 'react'
import Hamburger from 'hamburger-react'
import dc from './dog1.jpg'
import 'tachyons'
import './Vuecard.css'
import Logo from '../Logo/Logo'
import {useSelector} from 'react-redux'

const Vuecard=props=>{


    const data=useSelector(state=>state.data)

    const name=data.name

    const [isOpen, setOpen] = useState(false);
    



    return(
            <div className="Card mt3 shadow-2 br2 center" style={{overflow:"hidden",height:'100%'}}>
                <div className="BackgroundColor">
                    <div className="SendButton">
                        <div className="Icon"><Hamburger size={12} label="send" duration={0.8} direction="right" toggled={isOpen} toggle={setOpen} /></div>
                    </div>
                    <div className="TopRow">
                        <div className="Icon"><Logo/></div>
                        <div className="Icon"><table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td align="center"></td></tr><tr><td align="center">
                        <a href="https://www.paypal.com/webapps/mpp/paypal-popup" title="Donate via PayPal" ><img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" border="0" borderRadius="3" alt="Donate through paypal"/></a></td></tr></table></div>
                    </div>
                    <div className="AvatarRow">
                        <div className="Avatar" src={dc}><img alt="cat" src={dc} style={{borderRadius:'50%',height:'8.3rem',width:'8.3rem'}}/></div>
                        <div className="AvatarTitle">{name}</div>
                        <div className="AvatarSubtitle">{props.profession}</div>
                    </div>
                </div>
                <div className="Content">
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Email:{props.email}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Influencer/Business:{props.business}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Category/Niche:{props.niche}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Whatsapp Number:{props.wnum}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Mobile Number:{props.mnum}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Youtube channel:{props.yt}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Facebook channel:{props.fb}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Twitter page:{props.tt}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Instagram page:{props.insta}</h3>
                    <h3 className="gradient-text" style={{textAlign:"left"}}>Linkedin channel:{props.link}</h3>
                </div>
            </div>
    )
}

export default Vuecard