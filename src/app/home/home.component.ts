import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

import { Country } from "../models/country.model";
import { CountryService } from "../services/country.service";
import { Region } from "../models/region.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  regions: Observable<{ regions: Region[] }>;
  countries: Observable<{ countries: Country[] }>;

  countryList: Country[] = [];
  selectedCountry: Country;

  constructor(
    private http: HttpClient,
    private countryService: CountryService,
    private store: Store<{ regions: { regions: Region[] } }>,
    private countryStore: Store<{ countries: { countries: Country[] } }>
  ) {}

  ngOnInit() {
    this.regions = this.store.select("regions");
    this.countries = this.countryStore.select("countries");
    this.countries.subscribe(data => {
      data.countries.map(c => {
        this.countryList.push(
          new Country(c.name, c.capital, c.population, c.currencies, c.flag)
        );
      });
    });
    console.log("countries loaded");
  }

  onRegion(region: string) {
    this.selectedCountry = null;

    if (region) {
      this.countryService.getCountries(region);
    }
  }

  onLoad(name: string) {
    this.selectedCountry = this.countryList.find(c => c.name === name);
  }
}
