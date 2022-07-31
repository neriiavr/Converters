function eToDolar () {
    const inputsValue = document.getElementById("eToDolar").value
    var myHeaders = new Headers();
    myHeaders.append("apikey", "XJHIxfvMkz2q6OzJlM9bfuGCWGtEtQUJ");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };  
    
    fetch(`https://api.apilayer.com/currency_data/convert?to=USD&from=EUR&amount=${inputsValue}`, requestOptions)
    .then(response => response.json())
    .then(function (responseObject) {
        document.getElementById("dolarConverted").innerText = responseObject.result
    })
}

