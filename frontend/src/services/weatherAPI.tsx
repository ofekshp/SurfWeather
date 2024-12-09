import axios, { AxiosError, AxiosResponse } from "axios";

export const getWeatherData = async (query: string): Promise<AxiosResponse> => {
    try {
        const baseURL = "http://api.weatherapi.com/v1";
        const key = import.meta.env.VITE_STORMGLASS_API_KEY;

        if (!key) {
            throw new Error("API key is missing. Please set VITE_STORMGLASS_API_KEY in the environment.");
        }

        const endpoint = "current.json";

        const response: AxiosResponse = await axios.get(`${baseURL}/${endpoint}`, {
            params: {
                key: key,
                q: query,
            },
        });

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.response?.data || error.message);
            throw error;
        } else {
            console.error("Unexpected error:", error);
            throw new Error("An unexpected error occurred.");
        }
    }
};
