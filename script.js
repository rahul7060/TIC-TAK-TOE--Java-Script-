let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector("#new-game")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")


let turnO = true;

const wins = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetgame = () => {
    turnO = true;
    enablebox();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "X"
            turnO = false;
        } else {
            box.innerText = "O"
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congats!, Winner is ${winner}`
    msgcontainer.classList.remove("hide"); // hide class removed here
    disablebox();
}

const checkwinner = () => {
    for (let pattern of wins){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" & pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3) {
            
                showwinner(pos1);
            }
        }
    }
}

newgame.addEventListener("click", resetgame)
resetbtn.addEventListener("click", resetgame)