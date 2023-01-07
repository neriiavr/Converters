function celToFahFormula() {
    const inputsValue= document.getElementById("celToFah").value 
    var celToFahConver = ""
    celToFahConver = inputsValue * 9/5 + 32

    console.log(inputsValue)

    document.getElementById("celToFahDone").innerText = celToFahConver
}

function fahToCelFormula() {
    const inputsValue= document.getElementById("fahToCel").value
    var fahToCelConver = ""
    fahToCelConver = (inputsValue - 32) * 5/9

    console.log(inputsValue)

    document.getElementById("fahToCelDone").innerText = fahToCelConver
}

function ranToCelFormula() {
    const inputsValue= document.getElementById("ranToCel").value
    var ranToCelConver = ""
    ranToCelConver = inputsValue * 5/9 - 273.15 

    console.log(inputsValue)

    document.getElementById("ranToCelDone").innerText = ranToCelConver
}

