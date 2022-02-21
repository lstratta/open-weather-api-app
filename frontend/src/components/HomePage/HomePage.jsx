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

import '../../css/HomePage.css'

export default function HomePage ( {serverURL}) {

    const [ localTime, setLocalTime ] = useState( new Date() );
    const [ searchedTime, setSearchedTime ] = useState( new Date() );

    // outbound data
    const [ city, setCity ] = useState("");
    const [ country, setCountry ] = useState("");
    

    //inbound data
    const [ weatherData, setWeatherData ] = useState();
    const [ weatherIcon, setWeatherIcon ] = useState();

    let timeZone = 0;
    // the timezone from the GET request * 1000 to turn into unix timecode milliseconds,
    // then + 1000 milliseconds so that it matches the current seconds
    weatherData ? timeZone = weatherData.timezone * 1000 + 1000 : timeZone = 0;
    let date = new Date( localTime.getTime() + timeZone )

    async function getData() {

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

    // A very ugly switch statement to get all the icons
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
            case 701:
                setWeatherIcon(cloudHazeIcon) 
                break;
            case 711:
                setWeatherIcon(cloudHazeIcon) 
                break;
            case 721:
                setWeatherIcon(cloudHazeIcon) 
                break;
            case 731:
                setWeatherIcon(cloudHazeIcon) 
                break;
            case 751:
                setWeatherIcon(cloudHazeIcon) 
                break;
            case 761:
                setWeatherIcon(cloudHazeIcon) 
                break;
            case 762:
                setWeatherIcon(cloudHazeIcon) 
                break;
            case 771:
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

    function handleKeyPress(event) {
        if (event.key === "Enter"){
            getData();
        }

        return false;
    }

    function onFormSubmit(event) {
        event.preventDefault();

        getData();
    }

    useEffect( () => {

        let localTimer = setInterval(() => setLocalTime(new Date()), 1000);
        let searchedTimer = setInterval( () => setSearchedTime( date ), 1000 ) 

        return function cleanup() {
            clearInterval(localTimer)
            clearInterval(searchedTimer)
        }

    })

    useEffect( () => {
        
        setTimeout(() => {
            getWeatherIcon()
        }, 500);

    }, [ weatherData, weatherIcon ]);

    return (
        <div>
            {/* HERO SECTION */}
            <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
            
                <div className="container">
                    
                    
                    {/* HEADLINE */}
                    <div className="">

                        <h1 className="display-4 mt-5 mb-5 text-center">The Open Weather App</h1>

                    </div>

                    {/* SEARCH BAR */}
                    <div className="d-sm-flex justify-content-center">
                        <div className="input-group news-input pb-5 ">
                            <input 
                                className='form-control form-control-lg rounded-pill text-center' 
                                type="text" 
                                value={city.city}
                                onChange={e => setCity(e.target.value)}
                                name="location" 
                                id="" 
                                placeholder='Find a city...'
                                onKeyPress={handleKeyPress}
                            />
                            {/* <button 
                                className="btn btn-success btn-lg" 
                                type="submit" 
                                onClick={onFormSubmit}
                            >Submit</button> */}
                        
                        </div>
                    </div>

                </div>
            </section>

            {/* DATA REPRESENTATION */}
            <section className='p-5'>   
                <div className="container">
                    {/* ROW 1 */}
                    <div className="row align-items-center justify-content-evenly">

                        <div className="col-sm-3">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <h3 className='card-title'>
                                        { localTime.toLocaleTimeString() }
                                    </h3>
                                    <h4 className="card-text">
                                        Your Local Time
                                    </h4>
                                </div>
                            </div>
                        </div>
                
                        <div className="col-sm-3 text-center">
                            { weatherData && <img className='img-fluid' id="searchWeatherIcon" src={weatherIcon} alt="Weather Icon"/> }
                        </div>

                        <div className='col-sm-3 text-center '>
                            { weatherData && <p className='display-6'> {weatherData.name}, {weatherData.sys.country} </p> }
                        </div>
                        
                        <div className="col-sm-3">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <h3 className='card-title'>
                                        { weatherData ? searchedTime.toLocaleTimeString() : localTime.toLocaleTimeString() }
                                    </h3>
                                    <h4 className="card-text">
                                        { weatherData ? weatherData.name : "Your Local Time" }
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ROW 2 */}
                    <div className="row align-items-center justify-content-center pt-3">

                    <div className="col-sm-3">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <h3 className='card-title'>
                                        { weatherData && weatherData.main.temp}&#176;C
                                    </h3>
                                    <p className="card-text">
                                        Temp
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <h3 className='card-title'>
                                        { weatherData && weatherData.main.feels_like }&#176;C
                                    </h3>
                                    <p className="card-text">
                                        Feels Like
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <h3 className='card-title'>
                                        { weatherData && weatherData.main.temp_max }&#176;C
                                    </h3>
                                    <p className="card-text">
                                        High
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <h3 className='card-title'>
                                        { weatherData && weatherData.main.temp_min }&#176;C
                                    </h3>
                                    <p className="card-text">
                                        Low
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}