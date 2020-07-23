import React from "react"
import Card from "./Card"

function CardCollection(props){
    const listMaker = props.robots.map((x, i) =>{
        return(
        <Card key={i} id ={x.id} name={x.name} email={x.email}/>
        )
    }
    )
    
    return (
        <div>
            {listMaker}
        </div>
    )
}

export default CardCollection


