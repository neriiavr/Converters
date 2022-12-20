function divide254() {
    const inputsValue = document.getElementById("inchesToCm").value 
    var divide254 = ""
    divide254 = inputsValue / 2.54

    console.log(inputsValue)

    document.getElementById("fromInchesToCm").innerText = divide254
}

function multi12() {
    const inputsValue = document.getElementById("feetToIn").value
    var multi12 = ""
    multi12 = inputsValue * 12

    console.log(inputsValue)

    document.getElementById("fromFeetToInches").innerText = multi12 
}

function multi001() {
    const inputsValue = document.getElementById("cmToMeters").value
    var multi001 = ""
    multi001 = inputsValue * 0.01

    console.log(inputsValue)

    document.getElementById("fromCmToMeters").innerText = multi001
}