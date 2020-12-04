import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import logo from './logo.png'
import 'tachyons'
const Logo=()=>{
	return (
		<div className='ma4 mt0 ml2'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 150 }} >
 			<div className="Tilt-inner pa3"><img src={logo} alt='logo' style={{paddingTop:'5px'}}/></div>
			 </Tilt>
		</div>
		);
}
export default Logo;