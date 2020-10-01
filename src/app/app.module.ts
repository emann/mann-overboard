import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { WeatherComponent } from "./components/dashboard/weather/weather.component";
import { CalendarComponent } from "./components/dashboard/calendar/calendar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DayComponent } from "./components/dashboard/calendar/day/day.component";
import { TimeAndDateComponent } from "./components/dashboard/calendar/time-and-date/time-and-date.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        CalendarComponent,
        DashboardComponent,
        DayComponent,
        TimeAndDateComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
