/* Generated using http://json2ts.com/ */

export interface Headline {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}

export interface TemperatureValue {
    Value: number;
    Unit: string;
    UnitType: number;
}

export interface Temperature {
    Minimum: TemperatureValue;
    Maximum: TemperatureValue;
}

export interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
}

export interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
}

export interface DailyForecast {
    Date: string;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export interface DailyForecastsResponse {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}
