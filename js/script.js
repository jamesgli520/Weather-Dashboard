  const APIKey = '110f003e468e229c2ca99346a3200cf6';
var inputCityName = document.querySelector('#cityInput');
var searchCityName = document.querySelector('#searchButton');
var cityNameList =  document.querySelector('#city_name');
var divContainer = document.querySelector('#weekContainer');

var latitude, longtitude;
var index = 0;
var changeCityName;
var cityListArray = new Array();

searchCityName.addEventListener('click', searchLatLon);
  
function searchLatLon(){
  var latLonUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+inputCityName.value+'&appid='+ APIKey;
  
  fetch(latLonUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
          latitude = data.coord.lat;
          longtitude = data.coord.lon;

          if(latitude !== 'null' && longtitude !== 'null'){
            cityWeatherData();
            createCity(inputCityName.value);
          }

      });
}

function createCity(city){
  var cityList = document.querySelector('.city_list');
  var buttonEl = buttonEl +''+city
  buttonEl = document.createElement('button');
  buttonEl.setAttribute('id', city);
  buttonEl.setAttribute('style', 'font-size:25px')
  buttonEl.innerText = city;
  cityList.appendChild(buttonEl);
  var button = button+''+city;
  button = document.querySelector('#'+city);
  

  changeCityName = city;
    button.addEventListener('click', function(){
    var latLonUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+button.textContent+'&appid='+ APIKey;
  
    fetch(latLonUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
            latitude = data.coord.lat;
            longtitude = data.coord.lon;

            if(latitude !== 'null' && longtitude !== 'null'){
              changeCityName = city;
              cityWeatherData();
              
            }

        });

    });
}



function cityWeatherData(){
  var responseURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longtitude+'&exclude=minutely,hourly&units=metric&appid='+ APIKey;

  //variable of current weather of the city
  var h3ElDateCurrent = document.querySelector('#current');
  var pElCityNameC = document.querySelector('.cityName');
  var pElTemC = document.querySelector('.temperautrecurrent');
  var pElHumC = document.querySelector('.humidityCurrent');
  var pElWindC = document.querySelector('.windspeedCurrent');
  var pElUVIndc = document.querySelector('.UVIndexCurrent');

  
  
  fetch(responseURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
          var date = new Date().toISOString().slice(0, 10);
          
          //current weather
          pElCityNameC.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.current.weather[0].icon+".png'>"+changeCityName;
          h3ElDateCurrent.innerHTML=''+date;
          pElTemC.innerHTML = 'Temperture: '+data.current.temp +'&deg;C';
          pElHumC.innerHTML = 'Humidity: '+data.current.humidity +'%';
          pElWindC.innerHTML = 'Wind Speed: '+data.current.wind_speed +' MPH';
          if(data.current.uvi < 2){
            pElUVIndc.innerHTML = 'UV index Low: '+data.current.uvi;
            pElUVIndc.setAttribute('style','background-color:green');
          }else if(data.current.uvi > 2 && data.current.uvi < 5){
            pElUVIndc.innerHTML = 'UV index Moderate: '+data.current.uvi;
            pElUVIndc.setAttribute('style','background-color:yellow');
          }else if(data.current.uvi >= 5 && data.current.uvi <=7){
            pElUVIndc.innerHTML = 'UV index High: '+data.current.uvi
            pElUVIndc.setAttribute('style','background-color:orange');
          }else{
            pElUVIndc.innerHTML = 'UV index Severe: '+data.current.uvi;
            pElUVIndc.setAttribute('style','background-color:red');
          }
          var h3ElDateDate;
          var pElTem ='';
          var pElHum ='';
          var pElWind ='';
          var pElUVInd ='';

          for(var i = 0; i < 5; i++){
            //assign variables
            pElTem = 'pElTem'+i;
            pElHum = 'pElHum'+i;
            pElWind = 'pElWind'+i;
            pElUVInd = 'pElUVInd'+i;
            h3ElDateDate = 'h3ElDateDate'+i;
            pElTem = document.querySelector('.temperautreDate'+''+i);
            pElHum = document.querySelector('.humidityDate'+''+i)
            pElWind = document.querySelector('.windspeedDate'+''+i);
            pElUVInd = document.querySelector('.UVIndexDate'+''+i);
            h3ElDateDate = document.querySelector('#date'+i);

            h3ElDateDate.innerHTML = (new Date().getFullYear())+'-'+(new Date().getMonth()+1) +'-'+ (new Date().getDate()+(i+1));
            
            //day and night temperature
            if(new Date().getHours() < 6 || new Date().getHours() > 18){
              pElTem.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.daily[i].weather[0].icon+".png'>"+'Temperture: '+data.daily[i].temp.night+'&deg;C';
            }else{
              pElTem.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.daily[i].weather[0].icon+".png'>"+'Temperture: '+data.daily[i].temp.day+'&deg;C';
            }
              
            
            pElHum.innerHTML = 'Humidity: '+data.daily[i].humidity+'%';
            pElWind.innerHTML = 'Wind Speed: '+data.daily[i].wind_speed+' MPH';
            //check the level of UV index
            if(data.daily[i].uvi < 2){
              pElUVInd.innerHTML = 'UV index Low: '+data.daily[i].uvi;
              pElUVInd.setAttribute('style','background-color:green');
            }else if(data.daily[i].uvi > 2 && data.daily[i].uvi < 5){
              pElUVInd.innerHTML = 'UV index Moderate: '+data.daily[i].uvi;
              pElUVInd.setAttribute('style','background-color:yellow');
            }else if(data.daily[i].uvi >= 5 && data.daily[i].uvi <=7){
              pElUVInd.innerHTML = 'UV index High: '+data.daily[i].uvi;
              pElUVInd.setAttribute('style','background-color:orange');
            }else{
              pElUVInd.innerHTML = 'UV index Severe: '+data.daily[i].uvi;
              pElUVInd.setAttribute('style','background-color:red');
            }
        }
         
    });
    
      
}






