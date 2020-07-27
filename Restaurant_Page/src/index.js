import Materialize from "materialize-css"
import { AboutComponent } from "./about_component"
import { ContactComponent } from "./contact_component"
import { HomeComponent } from "./home_component"
import { MenuComponent } from "./menu_component"

function displayController () {
    console.log("diplayController executed")
    let content = document.querySelector("#content")
    let clickedContent = "home"
    
    document.querySelector("#home").addEventListener("click",(event)=>sentEvent(event))
    document.querySelector("#about").addEventListener("click",(event)=>sentEvent(event))
    document.querySelector("#menu").addEventListener("click", (event)=>sentEvent(event))
    document.querySelector("#contact").addEventListener("click", (event)=>sentEvent(event))

    function sentEvent(event){
        content = document.querySelector("#content")
        clickedContent = event.target.id
        /* console.log("clickedContent:",clickedContent) */
        //olmuyor
        switch(clickedContent){
            case "home":
                content.replaceWith(HomeComponent().homeDiv)
            case "menu":
                content.replaceWith(MenuComponent().menuDiv)
                break
            case "about":
                content.replaceWith(AboutComponent().aboutDiv)
                break
            case "contact":
                content.replaceWith(ContactComponent().contactDiv)
                break
        }
    }

    
}
const DisplayControl = displayController()