import axios, { AxiosError, AxiosResponse } from "axios";

export interface WeatherData {
    seaLevel: string;
    waveHeight: string;
    windDirection: string;
    windSpeed: string;
}

export const getWeatherData = async (): Promise<WeatherData> => {
    try {
        const baseURL = "https://api.stormglass.io/v2/weather/point";
        const key = import.meta.env.VITE_STORMGLASS_API_KEY;

        if (!key) {
            throw new Error("API key is missing. Please set VITE_STORMGLASS_API_KEY in the environment.");
        }

        const response: AxiosResponse<WeatherData> = await axios.get(baseURL, {
            headers: { Authorization: key },
            params: {
                lat: 37.7749,
                lng: -122.4194,
                params: "seaLevel,waveHeight,windDirection,windSpeed",
            },
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error;
        }
    }
    return {
        seaLevel: "ERROR",
        waveHeight: "ERROR",
        windDirection: "ERROR",
        windSpeed: "ERROR"
    };
}