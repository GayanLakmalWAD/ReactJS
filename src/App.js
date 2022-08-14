import React from "react"
import data from "./data"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

export default function App(){

    const cards = data.map(item => {
        return <Card
            key = {item.id}
            item={item} //or {...item}
        ></Card>
    })

    return (
        <div>
            <Navbar />
            <section className="card--section">
                {cards}
            </section>
        </div>
    )
}