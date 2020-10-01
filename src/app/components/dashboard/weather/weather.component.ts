import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { AccuweatherService } from "../../../services/accuweather/accuweather.service";
import { DailyForecast } from "../../../services/accuweather/models/daily-forecasts";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CurrentConditionsResponse } from "../../../services/accuweather/models/current-conditions";

@Component({
    selector: "app-weather",
    templateUrl: "./weather.component.html",
    styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit, OnDestroy {
    private unsubscribe = new Subject<void>();
    public forecasts: DailyForecast[]; // TODO: Decouple this (and current conditions) from the accuweather responses
    public currentConditions: CurrentConditionsResponse;
    public getIconSrc = this.weatherService.getIconSrc;

    constructor(private weatherService: AccuweatherService, private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.getCurrentConditions();
        this.getForecasts();
    }

    getCurrentConditions(): void {
        this.weatherService.currentConditions.pipe(takeUntil(this.unsubscribe)).subscribe((current) => {
            this.currentConditions = current;
            this.changeDetectorRef.detectChanges();
        });
    }

    getForecasts(): void {
        this.weatherService.dailyForecasts.pipe(takeUntil(this.unsubscribe)).subscribe((forecasts) => {
            this.forecasts = forecasts;
            this.changeDetectorRef.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe.next();
    }
}
