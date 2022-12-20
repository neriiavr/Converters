function celToFahFormula() {
    const inputsValue= document.getElementById("celToFah").value 
    var celToFahConver = ""
    celToFahConver = inputsValue * 9/5 + 32

    console.log(inputsValue)

    document.getElementById("celToFahDone").innerText = celToFahConver
}