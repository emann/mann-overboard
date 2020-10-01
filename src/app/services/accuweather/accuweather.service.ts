import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { GeopositionSearchResponse } from "./models/geoposition-search";
import { DailyForecast, DailyForecastsResponse } from "./models/daily-forecasts";
import { BehaviorSubject } from "rxjs";
import { CurrentConditionsResponse } from "./models/current-conditions";

const geoPositionSearchURL = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search";
const fiveDayForecastURL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
const currentConditionsURL = "http://dataservice.accuweather.com/currentconditions/v1/";

@Injectable({
    providedIn: "root",
})
export class AccuweatherService {
    public position: Coordinates | undefined;
    public locationKey: string;
    private _dailyForecasts: DailyForecast[] = [];
    public dailyForecasts = new BehaviorSubject<DailyForecast[]>(this._dailyForecasts);
    private _currentConditions?: CurrentConditionsResponse = null;
    public currentConditions = new BehaviorSubject<CurrentConditionsResponse>(this._currentConditions);

    constructor(private http: HttpClient) {
        this.getLocation();
    }

    getLocation(): void {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.position = position.coords;
                this.http
                    .get<GeopositionSearchResponse>(geoPositionSearchURL, {
                        params: {
                            apikey: environment.accuWeatherAPIKey,
                            q: `${this.position.latitude},${this.position.longitude}`,
                        },
                    })
                    .subscribe((response) => {
                        console.log(response);
                        this.setLocation(response.Key);
                    });
            },
            (error) => {
                console.log(error);
            },
        );
    }

    setLocation(locationKey: string): void {
        this.locationKey = locationKey;
        this.getCurrentConditions();
        this.getFiveDayForecast();
    }

    getCurrentConditions(): void {
        if (!this.locationKey) {
            return;
        }
        this.http
            .get<CurrentConditionsResponse>(currentConditionsURL + this.locationKey, {
                params: {
                    apikey: environment.accuWeatherAPIKey,
                },
            })
            .subscribe(
                (response) => {
                    this._currentConditions = response;
                    this.currentConditions.next(this._currentConditions);
                },
                (error) => {
                    console.log(`Error getting current conditions: ${error}`);
                },
            );
    }

    getFiveDayForecast(): void {
        if (!this.locationKey) {
            return;
        }
        this.http
            .get<DailyForecastsResponse>(fiveDayForecastURL + this.locationKey, {
                params: {
                    apikey: environment.accuWeatherAPIKey,
                },
            })
            .subscribe(
                (response) => {
                    this._dailyForecasts = response.DailyForecasts;
                    this.dailyForecasts.next(this._dailyForecasts);
                },
                (error) => {
                    console.log(`Error getting daily forecasts: ${error}`);
                },
            );
    }

    getIconSrc(iconNumber: number): string {
        const formattedIconNumber = iconNumber.toString().padStart(2, "0");
        return `https://developer.accuweather.com/sites/default/files/${formattedIconNumber}-s.png`;
    }
}
