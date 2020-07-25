//gameboard
class Gameboard {
    constructor(){
        this.gameArray = ["1","2","3",
                          "4","5","6",
                          "7","8","9"]
        this.player = true //change turn, to swap "x" and "o"
        this.isGameEnded = false
    }
    
    makeMove(id,event){
        if(this.gameArray[id-1] === "x" || this.gameArray[id-1] === "o" || this.isGameEnded){ //if square already selected do not continue, return.
            return
        }else if(this.player===true){
            this.gameArray[id-1]="x"
            this.player = !this.player
            event.target.innerHTML = "x"
            
        }else{
            this.gameArray[id-1]="o"
            this.player = !this.player
            event.target.innerHTML = "o"
        }
        /* console.log(this.gameArray)
        console.log(this.player) */
        this.isWin() ? this.endGame() : this.isTie()
    }
    isWin(){
        const winArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i = 0; i<8; i++){
            /* console.log(currentGameArray) */
            if(this.gameArray[winArray[i][0]]===this.gameArray[winArray[i][1]] && this.gameArray[winArray[i][1]]===this.gameArray[winArray[i][2]]){ 
                //if there is 3 "x" or 3 "o" side by side return true
                /* console.log("congrats") */
                return true
            }else{
                /* console.log("not a win") */
                continue
            }
        }
    }

    isTie(){
        this.gameArray.some((a)=> ["1","2","3","4","5","6","7","8","9"].includes(a)) 
        ? null 
        : displayControl.headerText.innerHTML = "Game is Tie"
        /* displayControl.headerText.innerHTML = "Game is Tie" */
    }

    endGame(){
        this.isGameEnded = true
        displayControl.initializeEndgame()
        return
    }
    newGame(){
        this.gameArray = ["1","2","3","4","5","6","7","8","9"]
        this.isGameEnded = false
    }

    test(){
        console.log("test")
    }    
}
const Gameboard_Ultimate = new Gameboard()


//displayController
function displayController(){
    function initializeMove(event){
        //console.log(event.target.id.split("")[1]) //seperating ["s","1"]
        Gameboard_Ultimate.makeMove(event.target.id.split("")[1],event)
        /* console.log(event.target.innerHTML) */  
    }
    function initializeEndgame(){
        /* console.log("You won the game") */
        headerText.innerHTML = "You won the game"
    }
    function initializeNewgame(){
        document.querySelectorAll(".game_square").forEach(square=> square.innerHTML = "")
        Gameboard_Ultimate.newGame()
        headerText.innerHTML = "Game is On"
    }
    const headerText = document.querySelector(".container h1")
    const square1 = document.querySelector("#s1")
    const square2 = document.querySelector("#s2")
    const square3 = document.querySelector("#s3")
    const square4 = document.querySelector("#s4")
    const square5 = document.querySelector("#s5")
    const square6 = document.querySelector("#s6")
    const square7 = document.querySelector("#s7")
    const square8 = document.querySelector("#s8")
    const square9 = document.querySelector("#s9")

    /* console.log("square1",square1.innerHTML) */

    square1.addEventListener("click", (event)=>initializeMove(event))
    square2.addEventListener("click", (event)=>initializeMove(event))
    square3.addEventListener("click", (event)=>initializeMove(event))
    square4.addEventListener("click", (event)=>initializeMove(event))
    square5.addEventListener("click", (event)=>initializeMove(event))
    square6.addEventListener("click", (event)=>initializeMove(event))
    square7.addEventListener("click", (event)=>initializeMove(event))
    square8.addEventListener("click", (event)=>initializeMove(event))
    square9.addEventListener("click", (event)=>initializeMove(event))

    return {
        initializeEndgame,
        initializeNewgame,
        headerText
    }
}
const displayControl = displayController()


//render