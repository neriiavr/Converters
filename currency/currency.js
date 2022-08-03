var myHeaders = new Headers();
myHeaders.append("apikey", "XJHIxfvMkz2q6OzJlM9bfuGCWGtEtQUJ");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};  

function eToDolar () {
    const inputsValue = document.getElementById("eToDolar").value

    fetch(`https://api.apilayer.com/currency_data/convert?to=USD&from=EUR&amount=${inputsValue}`, requestOptions)
    .then(response => response.json())
    .then(function (responseObject) {
        document.getElementById("eToDolarConverted").innerText = responseObject.result
    })
}

function dToEuro () {
    const inputsValue = document.getElementById("dToEuro").value
    fetch(`https://api.apilayer.com/currency_data/convert?to=EUR&from=USD&amount=${inputsValue}`, requestOptions)
    .then(response => response.json())
    .then(function (responseObject) {
        document.getElementById("dToEuroConverted").innerText = responseObject.result
    })
}

function convert() {
    const inputsValue = document.getElementById("input").value
    var select= document.getElementById("from")
    const valueFrom = from.options[select.selectedIndex].value
    var selectTo= document.getElementById("to")
    const valueTo = to.options[selectTo.selectedIndex].value

    fetch(`https://api.apilayer.com/currency_data/convert?to=${valueTo}&from=${valueFrom}&amount=${inputsValue}`, requestOptions)
    .then(response => response.json())
    .then(function (responseObject) {
        document.getElementById("selectedConverted").innerText = responseObject.result
    })
}

