import React from "react"
import logo from "../images/rectangle_90.png"

export default function ProfileImage() {
    return (
        <div>
           <img src={logo} alt="logo" className="profile--image"/>
        </div>
    )
}