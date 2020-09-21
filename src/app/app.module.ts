import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { WeatherComponent } from "./components/dashboard/weather/weather.component";
import { CalendarComponent } from "./components/dashboard/calendar/calendar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DayComponent } from "./components/dashboard/calendar/day/day.component";
import { DatetimeComponent } from "./components/dashboard/calendar/datetime/datetime.component";
import { TimeAndDateComponent } from "./components/dashboard/calendar/time-and-date/time-and-date.component";
import { CurrentWeatherComponent } from "./components/dashboard/weather/current-weather/current-weather.component";
import { DailyForecastComponent } from "./components/dashboard/weather/daily-forecast/daily-forecast.component";

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        CalendarComponent,
        DashboardComponent,
        DayComponent,
        DatetimeComponent,
        TimeAndDateComponent,
        CurrentWeatherComponent,
        DailyForecastComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
