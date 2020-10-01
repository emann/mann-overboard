export interface TemperatureValue {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Temperature {
    Metric: TemperatureValue;
    Imperial: TemperatureValue;
}

export interface CurrentConditionsResponse {
    LocalObservationDateTime: Date;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType?: "Rain" | "Snow" | "Ice" | "Mixed";
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
}
