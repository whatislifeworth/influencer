import React from 'react'
import 'tachyons'
import Home from '../Home/Home'

const Header=props=>{
    return(
        <div>
            <div class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <div class="center flex ttu tracked fw6">
                        <a class="link dim white dib mr3 tr "  href="123" title="Home">Home</a>
                        <a class="link dim white dib mr3 tr w-100"  href="123" title="Contact">Contact</a>
            </div>
        </div>
        <Home/>
        </div>
        
    )
}

export default Header