import React from 'react'
import 'tachyons'

const Form =props=>{

    return(
        <form className="pa4 black-80">
            <div className="measure">
                <label for="name" className="f6 b db mb2">Name <span className="normal black-60">(optional)</span></label>
                <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"  aria-describedby="name-desc"/>
                <label for="profession" className="f6 b db mb2">Profession <span className="normal black-60">(optional)</span></label>
                <input id="profession" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="email" className="f6 b db mb2">Email <span className="normal black-60">(optional)</span></label>
                <input id="email" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="business" className="f6 b db mb2">Business <span className="normal black-60">(optional)</span></label>
                <input id="business" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="niche" className="f6 b db mb2">Niche <span className="normal black-60">(optional)</span></label>
                <input id="niche" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="wnum" className="f6 b db mb2">Whatsapp Number <span className="normal black-60">(optional)</span></label>
                <input id="wnum" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="mnum" className="f6 b db mb2">Mobile Number <span className="normal black-60">(optional)</span></label>
                <input id="mnum" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="yt" className="f6 b db mb2">Youtube <span className="normal black-60">(optional)</span></label>
                <input id="yt" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="fb" className="f6 b db mb2">Facebook <span className="normal black-60">(optional)</span></label>
                <input id="fb" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="tt" className="f6 b db mb2">Twitter <span className="normal black-60">(optional)</span></label>
                <input id="tt" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="insta" className="f6 b db mb2">Instagram <span className="normal black-60">(optional)</span></label>
                <input id="insta" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                <label for="link" className="f6 b db mb2">Linkedin <span className="normal black-60">(optional)</span></label>
                <input id="link" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
               <a href="/"> <button title="SUBMIT" id="submit"></button></a>
            </div>
        </form>
    )}

export default Form
