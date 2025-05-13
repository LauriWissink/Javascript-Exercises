let countThuis = 0
let countUit = 0
let setsThuis = 0
let setsUit = 0

let getalThuis = document.getElementById("count-thuis")
let getalSetThuis = document.getElementById("set-thuis")
let getalUit = document.getElementById("count-uit")
let getalSetUit = document.getElementById("set-uit")

document.getElementById("won").style.display = 'none';


function plusThuis(){
   
    countThuis += 1
    getalThuis.innerText = countThuis
    
    if (countThuis == 25){
        setsThuis += 1
        getalSetThuis.textContent = "sets: " + setsThuis
        countThuis = 0
        getalThuis.innerText = countThuis
        teamWon()
        
    }
}

function plusUit(){
    countUit += 1
    getalUit.innerText = countUit    
    if (countUit == 25){
        setsUit += 1
        getalSetUit.textContent = "sets: " + setsUit
        countUit = 0
        getalUit.innerText = countUit
        teamWon()
        
    }
}

function reset(){
     countUit = 0
        getalUit.innerText = countUit
         countThuis = 0
        getalThuis.innerText = countThuis
        setsUit = 0
        setsThuis = 0
        getalSetThuis.textContent = "sets: " + setsThuis
        getalSetUit.textContent = "sets: " + setsUit
        document.getElementById("won").style.display = 'none';
}
 let teamNameOneName = document.getElementById("teamNameOne")
function saveTeamOne(){
    let teamOneName = document.getElementById("inputTeamOne").value
   
    
    teamNameOneName.innerText = "Team: " + teamOneName 
    document.getElementById("inputTeamOne").style.display = 'none';
      document.getElementById("saveTeamOne").style.display = 'none';
    
}
let teamNameTwoName = document.getElementById("teamNameTwo")
   
function saveTeamTwo(){
    let teamTwoName = document.getElementById("inputTeamTwo").value
     
    teamNameTwoName.innerText = "Team: " + teamTwoName 
    document.getElementById("inputTeamTwo").style.display = 'none';
      document.getElementById("saveTeamTwo").style.display = 'none';
    
}

let wonName = document.getElementById("teamName")
function teamWon(){
    if (setsThuis == 4 || setsThuis == 3 && setsUit == 1 || setsUit == 2 && setsThuis == 3){
        document.getElementById("won").style.display = 'block';
        confetti()
        let teamOneName = document.getElementById("inputTeamOne").value
       wonName.innerText += teamOneName  
  
        
    }
    if (setsUit == 4 || setsUit == 3 && setsThuis == 1 || setsUit == 3 && setsThuis == 2){
         document.getElementById("won").style.display = 'block';
     confetti()
       let teamTwoName = document.getElementById("inputTeamTwo").value
       wonName.innerText += teamTwoName 
    }
     
}
teamWon()

