import React from 'react'

const Card = ({ title, content, image }) => {
    return (
        <div className="card" style={{ width: "22rem" }}>
            <img src={image} className="card-img-top" alt="..." style={{ width: "70%", height: "30%", margin: "auto" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}

export default Card
