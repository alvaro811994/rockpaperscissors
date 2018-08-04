let p = document.querySelector("#demo");
let p1 = document.querySelector("#player");
let boton = document.querySelector("#btn1").value;
let botones = document.querySelectorAll("button");
//let input = document.querySelector("input");
let choices = ["rock", "paper", "scissors"];
let CPUSelection =  CPUOption();
let playerSelection = playerOption();
//boton.addEventListener("click", game(CPUSelection,playerSelection));
p.textContent = game(CPUSelection, playerSelection);
p1.textContent =  CPUSelection + playerOption;


function CPUOption(){
	let chosen = Math.floor(Math.random() * choices.length);
	return choices[chosen];
} //CPU choice

function playerOption(){
	return boton;
}

function game(CPUSelection, playerSelection){
	if(CPUSelection == playerSelection){
		ans = "TIE";
	}else if(CPUSelection == "paper" && playerSelection == "rock"){
		ans = "YOU LOSE";
		}else if(CPUSelection == "rock" && playerSelection == "scissors"){
		ans = "YOU LOSE";
			}else if(CPUSelection == "scissors" && playerSelection == "paper"){
		ans ="YOU LOSE";
				}else if(CPUSelection == "paper" && playerSelection == "scissors"){
		ans ="YOU WIN";
					}else if(CPUSelection == "rock" && playerSelection == "paper"){
		ans ="YOU WIN";
						}else if(CPUSelection == "scissors" && playerSelection == "rock"){
		ans ="YOU WIN";
	}
	return ans;
}
