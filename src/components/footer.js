import React from "react"
import twitter from "../images/twitter_Icon.png"
import fb from "../images/facebook_Icon.png"
import insta from "../images/instagram_Icon.png"
import github from "../images/gitHub_Icon.png"

export default function Footer() {
    return (
        <div className="footer">
             <img src={twitter} alt="twitter" />
             <img src={fb} alt="fb" />
             <img src={insta} alt="insta" />
             <img src={github} alt="github" />
        </div>
    )
}