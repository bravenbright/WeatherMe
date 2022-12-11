let savedZipcode = localStorage.getItem('zipcode');
document.getElementById('zipcode').value = savedZipcode;

const weatherApiKey = "daae0aee67b04aea9f68cce1499b0a63"
const weatherApiUrl = `https://api.weatherbit.io/v2.0/current?key=${weatherApiKey}`;
const searchApiKey = 'AIzaSyAUaXQtGxf5XAyA-aMru4Fu1OyU5C0919k';
const searchEngineId = '93dfd1403c28d4a84';

const searchUrl = 'https://www.googleapis.com/customsearch/v1?key=' + searchApiKey + '&cx=' + searchEngineId + '&q=';

let warmWeather = "warm+weather+recipes"
let coldWeather = "cold+weather+recipes"
let averageWeather = "easy+recipes"

// document.getElementById('temperature').appendChild(currentTemp);
// this variable should have the current weather temperature
// const weatherNow =
 
// let btnShow = document.querySelector('button');
// let output = document.querySelector('h4');

// btnShow.addEventListener('click', () => {
//     let today = new Date();

//     let month = today.getMonth() + 1;
//     let year = today.getFullYear();
//     let date = today.getDate();

//     let current_date = `${month}/${date}/${year}`
//     output.innerText = current_date;

// })

// this function retrieves the api information and uses and if else statement to determine the desired api search url,
// it also randomizes the results to prevent the user from getting a result more than once
function getApi() {
    let zipcode = document.getElementById('zipcode').value;
    if (zipcode.length == 5) {
        let temperature = null;
        document.getElementById('date').innerText = new Date().toLocaleString();

        let lookupValue = `&postal_code=${zipcode}&country=US&units=imperial`;
        fetch(weatherApiUrl + lookupValue)
        .then(response => response.json())
        .then(data => {
            // this section saves the zipcode to local storage
            localStorage.setItem('zipcode', zipcode)
            document.getElementById('temp').innerHTML = data.data[0].temp + '&#8457;'
            temperature = data.data[0].temp;
            let endUrl = '';
            if (temperature > 80) {
                endUrl = searchUrl  + warmWeather;
            } else if (temperature < 60) {
                endUrl = searchUrl + coldWeather;
            } else {
                endUrl = searchUrl + averageWeather;
            }
            fetch(endUrl)
            .then(response => response.json())
            .then(data => {
                let resultLength = data.items.length
                let randomIndex = Math.floor(Math.random() * resultLength)
                document.getElementById('result-title').textContent += data.items[randomIndex].title;
                document.getElementById('result-link').href = data.items[randomIndex].link;
                document.getElementById('result-img').src = data.items[randomIndex].pagemap.cse_thumbnail[0].src;
            })
        });
    }
}

// function getSearchApi() {
//      searchUrl = 'https://www.googleapis.com/customsearch/v1?key=' + searchApiKey + '&cx=' + searchEngineId + '&q=' + data.data[0].temp; 
//         fetch(searchUrl)
//         .then(function(response) {
//             return response.json();
//         })

//         .then(function (data) {
//             console.log(data);
// }
            



