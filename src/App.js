import React from "react"
import PrfoileImage from "./components/profileImage"
import ProfileDetails from "./components/profileDetails"
import ContactButtons from "./components/contactButtons"
import AboutInteresets from "./components/about_Interesets"
import Footer from "./components/footer"

export default function App() {
    return (
        <div>
            <PrfoileImage />
            <ProfileDetails />
            <ContactButtons />
            <AboutInteresets />
            <Footer />
        </div>
    )
}