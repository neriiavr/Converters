

function divide14() {
    const inputsValue = document.getElementById("ptos").value 
    var divided14 = ""
    divided14 = inputsValue / 14 

    console.log(inputsValue)

    document.getElementById("converted").innerText = divided14 
}

function kToStone() {
    const inputsValue = document.getElementById("ktos").value 
    var resultStone = ""
    resultStone = inputsValue * 0.15747 

    console.log(inputsValue)

    document.getElementById("stoneConverted").innerText = resultStone
}

function kToPound() {
    const inputsValue = document.getElementById("ktop").value
    var resultPound = ""
    resultPound = inputsValue * 2.204

    console.log(inputsValue)

    document.getElementById("poundConverted").innerText = resultPound 
}