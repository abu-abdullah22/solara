import { API_CONFIG } from "./config"
import type { Coordinates, WeatherData } from "./types";

class WeatherAPI {
    private createUrl(endpoint: string, params: Record<string, string | number>) {
        const searchParam = new URLSearchParams({
            appid: API_CONFIG.API_KEY,
            ...params,
        })

        return `${endpoint}?${searchParam.toString()}`;
    }


    private async fetchData<T>(url: string): Promise<T> {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Weather API Error : ${response.statusText}`)
        }

        return response.json();

    }



    async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
        })

        return this.fetchData<WeatherData>(url);
    }


    async getForecast() { }

    async reverseGeoCode() { }
}