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

    



    function dayOrNightLogic(day, night ) {
        
        let currentTime = new Date();
        
        if ( (currentTime + weatherData.timezone) >= weatherData.sys.sunrise && (currentTime + weatherData.timezone) <= weatherData.sys.sunset){
            console.log("daytime")
            setWeatherIcon(day) // sun icon
        }
        else {
            console.log("nightime")
            setWeatherIcon(night) // moon icon
        }
    }

    function getWeatherIcon () {

        console.log("WEATHER DATA ID" + weatherData.weather[0].id);
        
        switch (weatherData.weather[0].id) {
            case 800:
                dayOrNightLogic(sunIcon, moonIcon);
                break;
            case 801:
                dayOrNightLogic(cloudSunIcon, cloudMoonIcon);
                break;
            case 802:
                dayOrNightLogic(cloudSunIcon, cloudMoonIcon);
                break;
            case 803:
                setWeatherIcon(cloudIcon) 
                break;
            case 804:
                setWeatherIcon(cloudsIcon) 
                break;
            case 321:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 314:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 313:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 312:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 311:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 310:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 302:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 301:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 300:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 520 :
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 500:
                setWeatherIcon(cloudDrizzleIcon) 
                break;
            case 521:
                setWeatherIcon(cloudRainIcon) 
                break;
            case 501:
                setWeatherIcon(cloudRainIcon) 
                break;
            case 502:
                setWeatherIcon(cloudRainHeavyIcon) 
                break;
            case 503:
                setWeatherIcon(cloudRainHeavyIcon) 
                break;
            case 504:
                setWeatherIcon(cloudRainHeavyIcon) 
                break;
            case 522:
                setWeatherIcon(cloudRainHeavyIcon) 
                break;
            case 531:
                setWeatherIcon(cloudRainHeavyIcon) 
                break;
            case 622:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 621:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 620:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 616:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 615:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 602:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 601:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 511:
                setWeatherIcon(cloudSnowIcon) 
                break;
            case 611:
                setWeatherIcon(cloudSleetIcon) 
                break;
            case 612:
                setWeatherIcon(cloudSleetIcon) 
                break;
            case 613:
                setWeatherIcon(cloudSleetIcon) 
                break;
            case 210:
                setWeatherIcon(cloudLightningIcon) 
                break;
            case 211:
                setWeatherIcon(cloudLightningIcon) 
                break;
            case 212:
                setWeatherIcon(cloudLightningIcon) 
                break;
            case 221:
                setWeatherIcon(cloudLightningIcon) 
                break;
            case 200:
                setWeatherIcon(cloudLightningRainIcon) 
                break;
            case 201:
                setWeatherIcon(cloudLightningRainIcon) 
                break;
            case 202:
                setWeatherIcon(cloudLightningRainIcon) 
                break;
            case 230:
                setWeatherIcon(cloudLightningRainIcon) 
                break;
            case 231:
                setWeatherIcon(cloudLightningRainIcon) 
                break;
            case 232:
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

    function onFormSubmit(event) {
        event.preventDefault();

        getData();
        getWeatherIcon();
    }

    useEffect(() => {
        
        setTimeout(() => {
            getWeatherIcon()
        }, 500);

      }, [ weatherData ]);


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
                { weatherData && <img className='col-4 col-sm-4 col-md-3 col-lg-3 col-xl-2' src={weatherIcon} alt="Weather Icon" /> }
            </div>

        </div>
    );
}