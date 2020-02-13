import { TestBed } from "@angular/core/testing";

import { CountryService } from "./country.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { regionsReducer } from "../store/regions.reducer";
import { countriesReducer } from "../store/countries.reducer";

describe("CountryService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({
          regions: regionsReducer,
          countries: countriesReducer
        })
      ]
    })
  );

  it("should be created", () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
});
