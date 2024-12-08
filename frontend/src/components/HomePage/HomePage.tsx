import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../services/weatherAPI";
import "./HomePage.css";


function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getWeatherData();  
        console.log(response);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="HomePage">
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
