let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let msg = document.querySelector(".msg-container")

let turnO = true; // playerX, playerO

const winingPatterns = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    })
})


const checkWinner = ()=>{
    for(let pattern of winingPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if ((pos1Val !== "") && (pos2Val !=="") && (pos3Val !== "")){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                msg.innerText = `Congratulations Winner is ${pos1Val}`
                boxes.forEach((e)=>{
                    e.disabled = true;
                })

            }
        }
    };
    
}

resetBtn.addEventListener("click",()=>{
    boxes.forEach((e)=>{
        e.innerText = "";
        msg.innerText = "";
        e.disabled = false;
    })

})