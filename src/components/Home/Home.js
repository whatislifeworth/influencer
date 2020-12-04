import React from 'react'
import 'tachyons'
//import Tilt from 'react-tilt'
// import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Middle from '../Middle/Middle'
import Footer from '../Footer/Footer'
import Content from '../Content/Content'
import Testimonial from '../Testimonial/Testimonial'


const Home=props=>{
    return(
        <div className="flex shadow-3 br2" style={{display:'flex',flexDirection:'column',width:'100%',paddingTop:'5px'}}>
            <div>
                <Middle/>
            </div>
            <div>
                <Button/>
            </div>
            <Content/>
            <div className="f3 lh-copy" style={{textAlign:'left',paddingTop:'10px'}}>
                <Testimonial/>
            </div>
            <div style={{height:'20%'}}>
                <Footer/>
            </div>
        </div>
    )
}

export default Home