let num = 0

let herta = document.getElementById("kurugif")

//add kurukuru sound when user click the image repeatedly
function sound() {
    const audio = document.getElementById("audio")
    const repeatAudio = audio.cloneNode(true) //this will make clones of the audio
    document.body.appendChild(repeatAudio)
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
    
    if (num >= 10 && num <= 50) {
        num += 3   
        increaseSPD.innerHTML = "SPD Boosted +3"
    }

    if (num >= 50 && num <= 100) 
    {
        num += 6
        increaseSPD.innerHTML = "SPD Boosted +6"
    }    
    
    if (num >= 100 && num <= 1000) {
        num += 100
        increaseSPD.innerHTML = "SPD Boosted +100"
    }

    if (num == 1000) {
        num += 10000
        increaseSPD.innerHTML = "POWAAAAHHHH!!!"
    }
}

