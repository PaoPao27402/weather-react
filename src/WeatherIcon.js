import React from 'react'

import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon({ icon, size }) {
    const color = "white"
    return (
        <ReactAnimatedWeather
            icon={icon}
            size={size}
            color={color}
            animate={true}
        />

    )
}