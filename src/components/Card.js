import React from "react"

export default function Card(props) {
    return (
        <div>
            <div className="card">
            <img src={props.item.imageUrl} className="card--image"></img>
            <div className="card-details">
                <span><img src="./images/location.png" className="location--image"></img></span>
                <span className="card--location">{props.item.location}</span>
                <span className="card--viewOn">View on Google Maps</span>
                <p className="card--title">{props.item.title}</p>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
        <div className="border"></div>
        </div>
    )
}