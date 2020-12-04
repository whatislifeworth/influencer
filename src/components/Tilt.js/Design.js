import React from 'react';
import './Design.css'
import Tilt from 'react-parallax-tilt';
import 'tachyons'
import dog from './dog.jpg'

const Design =props=>{
    return(
            <Tilt
              className="tilt-img"
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={900}
              scale={1.1}
              transitionSpeed={2000}
              gyroscope={true}
            >
            <div className='br2 shadow2 center' style={{flex:1,paddingTop:'20px'}}>
            <img src={dog} className="inner-element br2 shadow-2" alt='pic' style={{width:'200px',height:'200px',borderRadius:'10px'}} />
              <p style={{fontSize:22}}>Developer</p>
            </div>
            </Tilt>
    )
}

export default Design