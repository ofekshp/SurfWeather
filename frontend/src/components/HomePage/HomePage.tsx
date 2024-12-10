import { useEffect, useState } from "react";
import { Wind, Thermometer, Clock, Search } from 'lucide-react';
import { getWeatherData } from "../../services/weatherAPI";
import { useNavigate } from 'react-router-dom';
// Define the type for weather data
interface WeatherData {
  windSpeed: number;
  temperature: number;
  feelsLike: number;
  lastUpdated: string;
}


function HomePage() {
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchWeather(searchQuery);
  };

    const searchWeather = async (city: string) => {
      try {
        const response = await getWeatherData(city);
        const data = response.data.current;
        setWeatherData({
          windSpeed: data.wind_kph,
          temperature: data.temp_c,
          lastUpdated: data.last_updated,
          feelsLike: data.feelslike_c,
          
        });
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        alert("Enter a city name.");
      }
    };

  if (error) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-pruple shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Weather
      </h1>
      <button className="postBTN myButton" onClick={() => navigate('/myApp')}>APP</button>
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
          <Search />
        </button>
      </form>

      {weatherData ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
            <div className="flex items-center space-x-3">
              <Wind className="text-blue-500" />
              <span className="font-medium text-gray-700">Wind Speed</span>
            </div>
            <span className="font-semibold text-gray-900">
              {weatherData.windSpeed} kph
            </span>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
            <div className="flex items-center space-x-3">
              <Thermometer className="text-red-500" />
              <span className="font-medium text-gray-700">Temperature</span>
            </div>
            <span className="font-semibold text-gray-900">
              {weatherData.temperature}°C
            </span>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
            <div className="flex items-center space-x-3">
              <Thermometer className="text-orange-500" />
              <span className="font-medium text-gray-700">Feels Like</span>
            </div>
            <span className="font-semibold text-gray-900">
              {weatherData.feelsLike}°C
            </span>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
            <div className="flex items-center space-x-3">
              <Clock className="text-green-500" />
              <span className="font-medium text-gray-700">Last Updated</span>
            </div>
            <span className="font-semibold text-gray-900">
              {weatherData.lastUpdated}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-600 animate-pulse">
            Enter city to get data
          </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;