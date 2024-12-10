**Weather App - React TypeScript**

This is a simple weather application built using React and TypeScript. It allows users to search for weather data based on city names, displaying details such as temperature, wind speed, humidity, and weather icon.

**Features**
* Search for weather by city name.
* Display temperature, wind speed, and humidity.
* Dynamic weather icons based on conditions (sun, clouds, rain, snow, etc.).
* Built with TypeScript, React, and OpenWeather API.
  
**Technologies Used**
* React
* TypeScript
* OpenWeather API - Provides current weather data.
* Axios - Promise-based HTTP client for making API requests.
* React Router - For navigation within the app.
* CSS - Styling the application.

**How it Works**
* WeatherPage Component: The main page of the app where users can search for a city and view weather details.
* getWeatherData Service: A function to fetch weather data from OpenWeather API using Axios.
* App Component: Renders the WeatherPage and handles routing.

**Example**

To search for a city's weather, type the city name into the input field and click the search icon. The app will display the temperature, wind speed, humidity, and weather icon.  
