import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DropdownDirective } from "./dropdown.directive";
import { HomeComponent } from "./home/home.component";
import { CountryDetailsComponent } from "./country-details/country-details.component";
import { regionsReducer } from "./store/regions.reducer";
import { countriesReducer } from "./store/countries.reducer";

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HomeComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      regions: regionsReducer,
      countries: countriesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
