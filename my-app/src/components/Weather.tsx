import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';

import { WeatherData } from '../store/types';

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);

    return(
        <section className="section">
        <div className="container">
            <h1 className="title has-text-centered" style={{marginBottom: 50}}>{data.name} - {data.sys.country}</h1>
            <div className="level" style={{alignItems: 'flex-start'}}>
                <div className="level-item has-text-centered">
                    <div>
                    <Typography variant="h5" color = 'primary' gutterBottom >
                        {data.weather[0].description}
                    </Typography>
                    <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <Typography variant="h5" color = 'primary' gutterBottom>
                        Temperature
                    </Typography>
                    <div className="title">
                        <p className="mb-2">{data.main.temp}K</p>
                        <p className="mb-2">{fahrenheit}<sup>&#8457;</sup></p>
                        <p>{celsius}<sup>&#8451;</sup></p>
                    </div>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <Typography variant="h5" color = 'primary' gutterBottom>
                        Humidity
                    </Typography>
                    <p className="title">{data.main.humidity}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <Typography variant="h5" color = 'primary' gutterBottom>
                        Pressure
                    </Typography>
                    <p className="title">{data.main.pressure}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <Typography variant="h5" color = 'primary' gutterBottom>
                        Wind Speed
                    </Typography>
                    <p className="title">{data.wind.speed} m/s</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Weather;