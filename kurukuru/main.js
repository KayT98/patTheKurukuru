let num = 0;

function clickMe() {
    num += 1
    document.getElementById("kurugif")
    let counts = document.getElementById("counts")
    counts.innerHTML = num

    
    let increaseSPD = document.getElementById("patSPD")
    if (num >= 10) {
        num += 3
        increaseSPD.innerHTML = "SPD Boosted x3"
    }

    if (num >= 30) {
        num += 6
        increaseSPD.innerHTML = "SPD Boosted x6"
    }

    if (num >= 50) {
        num += 100
        increaseSPD.innerHTML = "SPD Boosted x100 POWAAAAAAHHHH"
    }
}
