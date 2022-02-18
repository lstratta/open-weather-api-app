import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

export default function HomePage ( {serverURL}) {

    // outbound data
    const [ city, setCity ] = useState("");
    const [ country, setCountry ] = useState("");

    //inbound data
    const [ weatherData, setWeatherData ] = useState();

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
                <img src="cloud.svg" alt="cloud" />
            </div>

        </div>
    );
}