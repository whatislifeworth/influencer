import React from 'react'
import 'tachyons'
import Banner from '../Banner/Banner'
import Vuecard from '../Vuecard/Vuecard'
import Footer from '../Footer/Footer'

const Align=props=>{

    return(
        <div>
            <div class="flex">
                <div class="mt3 shadow-2 br2" style={{width:'25%',height:'100%'}}>
                    <div>Banner images accepted</div>
                </div>
                <div style={{width:'50%',height:'100%'}}>
                <Vuecard/>
                </div>
                <div class="mt3 shadow-2" style={{width:'25%',height:'100%'}}>
                    <div>Banner images accepted</div>
                </div>
            </div>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Align