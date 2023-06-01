let num = 0

let herta = document.getElementById("kurugif")

//add kurukuru sound when user click the image
function sound() {
    let audio = document.getElementById("audio")
    audio.play()
}

function clickMe() {

    if (num <= 10)
    {
        num += 1
    }
    let counts = document.getElementById("counts")
    counts.innerHTML = num

    //increase the speed
    let increaseSPD = document.getElementById("patSPD")
    
    if (num >= 10 && num < 40) {
        num += 3   
        increaseSPD.innerHTML = "SPD Boosted +3"
    }

    if (num >= 40) 
    {
        num += 6
        increaseSPD.innerHTML = "SPD Boosted +6"
    }         
}
