import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// clear sky icons
import sunIcon from "/node_modules/bootstrap-icons/icons/sun.svg";
import moonIcon from "/node_modules/bootstrap-icons/icons/moon.svg";

// cloud icons
import cloudIcon from "/node_modules/bootstrap-icons/icons/cloud.svg";
import cloudsIcon from "/node_modules/bootstrap-icons/icons/clouds.svg";
import cloudSunIcon from "/node_modules/bootstrap-icons/icons/cloud-sun.svg";
import cloudMoonIcon from "/node_modules/bootstrap-icons/icons/cloud-moon.svg";
import cloudDrizzleIcon from "/node_modules/bootstrap-icons/icons/cloud-drizzle.svg";
import cloudRainIcon from "/node_modules/bootstrap-icons/icons/cloud-rain.svg";
import cloudRainHeavyIcon from "/node_modules/bootstrap-icons/icons/cloud-rain-heavy.svg";
import cloudSleetIcon from "/node_modules/bootstrap-icons/icons/cloud-sleet.svg";
import cloudSnowIcon from "/node_modules/bootstrap-icons/icons/cloud-snow.svg";
import cloudHailIcon from "/node_modules/bootstrap-icons/icons/cloud-hail.svg";
import cloudLightningIcon from "/node_modules/bootstrap-icons/icons/cloud-lightning.svg";
import cloudLightningRainIcon from "/node_modules/bootstrap-icons/icons/cloud-lightning-rain.svg";
import cloudHazeIcon from "/node_modules/bootstrap-icons/icons/cloud-haze.svg";
import cloudFogIcon from "/node_modules/bootstrap-icons/icons/cloud-fog.svg";

import windIcon from "/node_modules/bootstrap-icons/icons/wind.svg";
import tornadoIcon from "/node_modules/bootstrap-icons/icons/tornado.svg";

export default function HomePage ( {serverURL}) {

    // outbound data
    const [ city, setCity ] = useState("");
    const [ country, setCountry ] = useState("");
    

    //inbound data
    const [ weatherData, setWeatherData ] = useState();
    const [ weatherIcon, setWeatherIcon ] = useState();

    //console.log(serverURL)

    async function getData  () {
        await axios.get(`${serverURL}/current-weather/${city}/metric`)
            .then(res => {
                setWeatherData(res.data);
            })
            .catch( err => {
                console.log(err); // replace with an alert?
            })
        
    } 

    function onFormSubmit(event) {
        event.preventDefault();

        getData();
    }

    useEffect( () => {
        getWeatherIcon();
    }, [weatherData]);


    function dayOrNightLogic(day, night ) {
        
        let currentTime = new Date();
        
        if ( (currentTime + weatherData.timezone) >= weatherData.sys.sunrise && (currentTime + weatherData.timezone) <= weatherData.sys.sunset){
            setWeatherIcon(day) // sun icon
            console.log("daytime")
        }
        else {
            setWeatherIcon(night) // moon icon
            console.log("nightime")
        }
    }

    function getWeatherIcon () {

        console.log("WEATHER DATA ID" + weatherData.weather[0].id);
        
        switch (weatherData.weather[0].id) {
            case 800:
                dayOrNightLogic(sunIcon, moonIcon);
                break;
            case 801 || 802:
                dayOrNightLogic(cloudSunIcon, cloudMoonIcon);
                break;
            case 803:
                setWeatherIcon(cloudIcon) 
                break;
            case 804:
                setWeatherIcon(cloudsIcon) 
                break;
            case 500 || 520 || 300 || 301 || 302 || 310 || 311 || 312 || 313 || 314 || 321:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 501 || 521:
                setWeatherIcon(cloudRainIcon) 
                break;
            case 502 || 503 || 504 || 522 || 531:
                setWeatherIcon(cloudRainHeavyIcon) 
                break;
            case 511 || 601 || 602 || 615 || 616 || 620 || 621 || 622:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 611 || 612 || 613:
                setWeatherIcon(cloudSleetIcon) 
                break;
            case 210 || 211 || 212 || 221:
                setWeatherIcon(cloudLightningIcon) 
                break;
            case 200 || 201 || 202 || 230 || 231 || 232:
                setWeatherIcon(cloudLightningRainIcon) 
                break;
            case 701 || 711 || 721 || 731 || 751 || 761 || 762 || 771:
                setWeatherIcon(cloudHazeIcon) 
                break;
            case 741:
                setWeatherIcon(cloudFogIcon) 
                break;        
            case 781:
                setWeatherIcon(tornadoIcon) 
                break;
        }
    }

    return (
        <div>

            {/* HEADLINE */}
            <div className="row justify-content-center">

                <h1 className="display-2 col-8 mt-5 mb-5 text-center">The Weather App</h1>

            </div>

            {/* SEARCH BAR */}
            <form onSubmit={onFormSubmit}>
                <div className='row justify-content-center'>

                    <div className="col-20 col-sm-9 col-md-8 mb-3">
                            <input 
                            className='form-control form-control-lg' 
                            type="text" 
                            value={city.city}
                            onChange={e => setCity(e.target.value)}
                            name="location" 
                            id="" 
                            placeholder='Find a city...'
                            />
                    </div>                        

                    <div className='col-3 col-sm-3 col-md-1 mb-5'>
                        <button className='btn btn-lg btn-primary' >Search</button>
                    </div>

                </div>
            </form>

            
            {/* DATA REPRESENTATION */}
            <div className='row justify-content-center'>

                { weatherData && <h3 className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2'>{weatherData.name}, {weatherData.sys.country}</h3> }
                <img className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2' src={weatherIcon} alt="/cloud" />
            </div>

        </div>
    );
}