import React from 'react'
import 'tachyons'

const Banner=props=>{
    return(
        <section className="ph3 ph5-ns pv5">
    <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
        <div className="dt-ns dt--fixed-ns w-100">
        <div className="pa3 pa4-ns dtc-ns v-mid">
            <div>
            <h2 className="fw4 blue mt0 mb3">MFAGAMINGTV</h2>
            <p className="black-70 measure lh-copy mv0">
                ALL LATEST GAMES ARE LIVE STREAMED EVERYDAY.SUBSCRIBE AND SUPPORT US.IF YOU LIKE OUR CHANNEL,FEEL FREE TO CONTRIBUTE.ALL CONTRIBUTIONS ARE WELCOME
            </p>
            </div>
        </div>
        <div className="pa3 pa4-ns dtc-ns v-mid">
            <a href="123" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Sign up for free</a>
        </div>
        </div>
    </article>
</section>
    )
}

export default Banner