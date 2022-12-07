// this variable should insert the h2 that will hold the temperature of a zipcode

const apiKey = "daae0aee67b04aea9f68cce1499b0a63"
// document.getElementById('temperature').appendChild(currentTemp);
// this variable should have the current weather temperature
// const weatherNow =
 
let btnShow = document.querySelector('button');
let output = document.querySelector('h4');

btnShow.addEventListener('click', () => {
    let today = new Date();

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date = `${month}/${date}/${year}`
    output.innerText = current_date;

})

function getApi() { 
    var requestUrl = 'https://api.weatherbit.io/v2.0/current' + '?key=' + apiKey + '&postal_code=76502&country=US';

    fetch(requestUrl)
    .then(function(response){
        
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        // console.log(data.data[0].weather.description)
        const temperature = document.createElement("h2")
        temperature.textContent = data.data[0].weather.description;
        document.body.appendChild(temperature)
    })
}

getApi()
