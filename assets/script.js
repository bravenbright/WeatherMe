
const weatherApiKey = "daae0aee67b04aea9f68cce1499b0a63"

//custom search variables
const searchApiKey = 'AIzaSyAUaXQtGxf5XAyA-aMru4Fu1OyU5C0919k';
const searchEngineId = '93dfd1403c28d4a84';
//const searchUrl = 'https://www.googleapis.com/customsearch/v1?key=' + searchApiKey + '&cx=' + searchEngineId + '&q=' + temperature;

// document.getElementById('temperature').appendChild(currentTemp);
// this variable should have the current weather temperature
// const weatherNow = 


function getApi() {
    let zipcode = document.getElementById('zipcode').value;
    if (zipcode.length == 5) {
        
        var requestUrl = 'https://api.weatherbit.io/v2.0/current' + '?key=' + weatherApiKey + '&postal_code=' + zipcode + '&country=US';
    
        fetch(requestUrl)
        .then(function(response){
            return response.json()
        })
        // .then(function(data){
        .then(function(data) {
            console.log(data);
            // console.log(data.data[0].weather.description)
            const temperature = document.createElement("h2")
            temperature.textContent = data.data[0].weather.description;
            document.body.appendChild(temperature)
        
     searchUrl = 'https://www.googleapis.com/customsearch/v1?key=' + searchApiKey + '&cx=' + searchEngineId + '&q=' + temperature; 
        fetch(searchUrl)
        .then(function(response) {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
        
        })
    })
     
    
    }
}


