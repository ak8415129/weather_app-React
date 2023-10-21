import React, { useState } from 'react'
import './WeatherApp.css' 
import search_icon from '../Assests/search.png'; 
import clear_icon from '../Assests/clear.png'; 
import cloud_icon from '../Assests/cloud.png';
import drizzle_icon from '../Assests/drizzle.png';
import rain_icon from '../Assests/rain.png';
import snow_icon from '../Assests/snow.png'; 
import wind_icon from '../Assests/wind.png';
import humidity_icon from '../Assests/humidity.png';




const WeatherApp = () => { 

  //let api_key="faf2796ec1fb44241ccc3ceec20d60aa";
   const [wicon,setWicon]=useState(drizzle_icon);
  const search= async()=>{
   
    const element=document.getElementsByClassName("input-bar");
     if(element[0].value==="")
     {
        return 0;
     }  
     try{  
     let url=`http://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=faf2796ec1fb44241ccc3ceec20d60aa`
     let response=await fetch(url); 
     
    let data=  await response.json(); 
   // console.log(data.main.humidity); 
   
    const humid=document.getElementsByClassName('humidity-percent');
    const wind=document.getElementsByClassName('wind-rate');
    const location=document.getElementsByClassName('weather-location')
    const temp=document.getElementsByClassName('weather-temp')
    
    humid[0].innerHTML=`${Math.floor(data.main.humidity)} %`; 
    wind[0].innerHTML=`${Math.floor(data.wind.speed)} km/h`; 
    temp[0].innerHTML=`${Math.floor(data.main.temp)} C`;  
    location[0].innerHTML=data.name;  

    if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n") 
    {
      setWicon(clear_icon);
    } 
   else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n") 
    {
      setWicon(cloud_icon);
    } 
    else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n") 
    {
      setWicon(drizzle_icon);
    }  
    else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n") 
    {
      setWicon(drizzle_icon);
    }  
    else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n") 
    {
      setWicon(rain_icon);
    }  
    else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n") 
    {
      setWicon(rain_icon);
    }  
    else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n") 
    {
      setWicon(snow_icon);
    }  
    else{
      setWicon(clear_icon);
    } 
  }
  catch(error){
    this.setState({ error: error.message });

  }
  }

  return (
    <div className='container'> 
    <div className="top-bar">
        <input type="text" className='input-bar' placeholder='Search'/> 
        <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
        </div>
    </div> 
    <div className="weather-img">
        <img src={wicon} alt="" />
    </div> 
    <div className="weather-temp"></div> 
    <div className="weather-location"></div> 
    <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt=""  className='icon'/> 
            <div className="data">
             <div className="humidity-percent"> </div> 
              <div className="text">Humidity</div>  
            </div>
        </div> 
        <div className="element">
            <img src={wind_icon} alt=""  className='icon'/> 
            <div className="data">
             <div className="wind-rate">  </div> 
              <div className="text">Wind Speed</div>  
            </div>
        </div>

    </div>
    </div>
  )
}

export default WeatherApp