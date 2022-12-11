
const weatherApiKey = "daae0aee67b04aea9f68cce1499b0a63"
const weatherApiUrl = `https://api.weatherbit.io/v2.0/current?key=${weatherApiKey}`;

// custom search variables
const searchApiKey = 'AIzaSyAUaXQtGxf5XAyA-aMru4Fu1OyU5C0919k';
const searchEngineId = '93dfd1403c28d4a84';

const searchUrl = 'https://www.googleapis.com/customsearch/v1?key=' + searchApiKey + '&cx=' + searchEngineId + '&q=';

let warmWeather = "warm+weather+recipes"
let coldWeather = "cold+weather+recipes"
let averageWeather = "average+day+recipes"

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


function getApi() {
    let zipcode = document.getElementById('zipcode').value;
    if (zipcode.length == 5) {
        // set zipcode local storage
        document.getElementById('date').innerText = new Date().toLocaleString();

        let lookupValue = `&postal_code=${zipcode}&country=US&units=imperial`;
        fetch(weatherApiUrl + lookupValue)
        .then(response => response.json())
        .then(data =>
            document.getElementById('temp').innerHTML = data.data[0].temp + '&#8457;'
        );

        fetch(searchUrl + warmWeather)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-data').innerHTML = data.items[0].title;
            // broken code in question(line55). It will display if you switch title and link on line 51,
            // however it will not display both unless they are both encapsulated in seperate sections which is not ideal
            // but a good backup plan
            document.getElementById('link-btn').textContent = data.items[0].link;
            // we will also need an if else statement or look like the ones we had to create warm vs cold weather recipes. 
//          currently we have the variable inserted manually in the fetch (on line 48)
        })

            

        // fetch(searchUrl + warmWeather)
        // .then(response => response.json())
        // .then(data => {
          
        // })


        // fetch(searchUrl + warmWeather)
        // let linkBtn = document.createElement('button')
        // linkBtn.setAttribute("type", "button")
        // .then(response => response.json())
        // .then(data => { 
        //     // document.getElementById('link-btn').innerHTML = data.items[0].link
        //     linkBtn.textContent = data.items[0].link; 
        // })
        
    }
    
    // for (var i = 0; i < data.length)
}

// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";

// loop through with math.random 


// function getSearchApi() {
//      searchUrl = 'https://www.googleapis.com/customsearch/v1?key=' + searchApiKey + '&cx=' + searchEngineId + '&q=' + data.data[0].temp; 
//         fetch(searchUrl)
//         .then(function(response) {
//             return response.json();
//         })

//         .then(function (data) {
//             console.log(data);
            

//         })
//     })
//     if (temperature > 80) {
//         // dipslay hot day recipes in a variable
//                 return searchUrl + "&q=" + warmWeather;
//             } else (temperature < 60) {
//                 return searchUrl + "&q=" + coldWeather;
//             } (temperature => 60 ) {
//                 return searchUrl + "&q=" + averageWeather;
//             }

    
// }

// }



