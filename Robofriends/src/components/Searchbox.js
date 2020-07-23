import React from "react"


function Searchbox({searchChange}){
    return(
        <input 
        type="text" 
        className="Searchbox" 
        placeholder="Arkadaş ara" 
        onChange = {searchChange}/>
    )
}

export default Searchbox