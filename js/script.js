  const APIKey = '110f003e468e229c2ca99346a3200cf6';
var inputCityName = document.querySelector('#cityInput');
var searchCityName = document.querySelector('#searchButton');
var cityNameList =  document.querySelector('#city_name');
var divContainer = document.querySelector('#weekContainer');

var latitude, longtitude;

    var atlResponseURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.388&exclude=minutely,hourly,daily&units=metric&appid='+ APIKey;
    fetch(atlResponseURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var date = new Date().toISOString().slice(0, 10);
        var dateATLEl = document.querySelector('#dateATL');
        var pElTemATL = document.querySelector('.temperatureATL');
        var pElHumATL = document.querySelector('.humidityATL');
        var pElWindATL = document.querySelector('.windspeedATL');
        var pElUVIndATL = document.querySelector('.UVIndexATL');
        dateATLEl.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.current.weather[0].icon+".png'>"+date;
        pElTemATL.innerHTML = 'Temperture: '+data.current.temp +'&deg;C';
        pElHumATL.innerHTML = 'Humidity: '+data.current.humidity +'%';
        pElWindATL.innerHTML = 'Wind Speed: '+data.current.wind_speed +' MPH';
        pElUVIndATL.innerHTML = 'UV index: '+data.current.uvi;

    });

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
            //atlantaWeather();
            cityWeatherData();


          }

      });
}





function cityWeatherData(){
  var responseURL = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longtitude+'&exclude=minutely,hourly&units=metric&appid='+ APIKey;

  //current
  var pElCityNameC = document.querySelector('.cityName');
  var pElTemC = document.querySelector('.temperautrecurrent');
  var pElHumC = document.querySelector('.humidityCurrent');
  var pElWindC = document.querySelector('.windspeedCurrent');
  var pElUVIndc = document.querySelector('.UVIndexCurrent');

  //forcast 
  var pElTem1 = document.querySelector('.temperautreDate1');
  var pElHum1 = document.querySelector('.humidityDate1');
  var pElWind1 = document.querySelector('.windspeedDate1');
  var pElUVInd1 = document.querySelector('.UVIndexDate1');

  var pElTem2 = document.querySelector('.temperautreDate2');
  var pElHum2 = document.querySelector('.humidityDate2');
  var pElWind2 = document.querySelector('.windspeedDate2');
  var pElUVInd2 = document.querySelector('.UVIndexDate2');

  var pElTem3 = document.querySelector('.temperautreDate3');
  var pElHum3 = document.querySelector('.humidityDate3');
  var pElWind3 = document.querySelector('.windspeedDate3');
  var pElUVInd3 = document.querySelector('.UVIndexDate3');

  var pElTem4 = document.querySelector('.temperautreDate4');
  var pElHum4 = document.querySelector('.humidityDate4');
  var pElWind4 = document.querySelector('.windspeedDate4');
  var pElUVInd4 = document.querySelector('.UVIndexDate4');

  var pElTem5 = document.querySelector('.temperautreDate5');
  var pElHum5 = document.querySelector('.humidityDate5');
  var pElWind5 = document.querySelector('.windspeedDate5');
  var pElUVInd5 = document.querySelector('.UVIndexDate5');

  var h3ElDateCurrent = document.querySelector('#current');
  var h3ElDateDate1 = document.querySelector('#date1');
  var h3ElDateDate2 = document.querySelector('#date2');
  var h3ElDateDate3 = document.querySelector('#date3');
  var h3ElDateDate4 = document.querySelector('#date4');
  var h3ElDateDate5 = document.querySelector('#date5');
  





  fetch(responseURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
          var date = new Date().toISOString().slice(0, 10);
          
          pElCityNameC.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.current.weather[0].icon+".png'>"+"City Name: "+inputCityName.value;
          h3ElDateCurrent.innerHTML=''+date;
          pElTemC.innerHTML = 'Temperture: '+data.current.temp +'&deg;C';
          pElHumC.innerHTML = 'Humidity: '+data.current.humidity +'%';
          pElWindC.innerHTML = 'Wind Speed: '+data.current.wind_speed +' MPH';
          pElUVIndc.innerHTML = 'UV index: '+data.current.uvi;

          pElTem1.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.daily[0].weather[0].icon+".png'>"+'Temperture: '+data.daily[0].temp.day+'&deg;C';
          pElHum1.innerHTML = 'Humidity: '+data.daily[0].humidity+'%';
          pElWind1.innerHTML = 'Wind Speed: '+data.daily[0].wind_speed+' MPH';
          pElUVInd1.innerHTML = 'UV index: '+data.daily[0].uvi;

          pElTem2.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon+".png'>"+'Temperture: '+data.daily[1].temp.day +'&deg;C';
          pElHum2.innerHTML = 'Humidity: '+data.daily[1].humidity+'%';
          pElWind2.innerHTML = 'Wind Speed: '+data.daily[1].wind_speed +' MPH';
          pElUVInd2.innerHTML = 'UV index: '+data.daily[1].uvi;

          pElTem3.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon+".png'>"+'Temperture: '+data.daily[2].temp.day +'&deg;C';
          pElHum3.innerHTML = 'Humidity: '+data.daily[2].humidity+'%';
          pElWind3.innerHTML = 'Wind Speed: '+data.daily[2].wind_speed;
          pElUVInd3.innerHTML = 'UV index: '+data.daily[2].uvi;

          pElTem4.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon+".png'>"+'Temperture: '+data.daily[3].temp.day +'&deg;C';
          pElHum4.innerHTML = 'Humidity: '+data.daily[3].humidity+'%';
          pElWind4.innerHTML = 'Wind Speed: '+data.daily[3].wind_speed+' MPH';
          pElUVInd4.innerHTML = 'UV index: '+data.daily[3].uvi;

          pElTem5.innerHTML = "<img src='http://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon+".png'>"+'Temperture: '+data.daily[4].temp.day +'&deg;C';
          pElHum5.innerHTML = 'Humidity: '+data.daily[4].humidity+'%';
          pElWind5.innerHTML = 'Wind Speed: '+data.daily[4].wind_speed+' MPH';
          pElUVInd5.innerHTML = 'UV index: '+data.daily[4].uvi;

          
      });
      
}






