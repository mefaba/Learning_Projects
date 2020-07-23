import React from "react"

function Card(props) {
    return(
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={"https://robohash.org/"+props.id} alt="crazyass"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
    
}

export default Card

/* const cardList = robots.map((x) => {
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={"https://robohash.org/"+x.id} alt="crazyass"/>
            <div>
                <h2>{x.name}</h2>
                <p>{x.email}</p>
            </div>
        </div>
    )})

function Card() {
    return cardList
} */


/* 
            <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={"https://robohash.org/"+props.id} alt="crazyass"/>
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                </div>
            </div>
        ); */