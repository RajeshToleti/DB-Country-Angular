import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { StoreModule } from "@ngrx/store";
import { regionsReducer } from "../store/regions.reducer";
import { countriesReducer } from "../store/countries.reducer";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,

        StoreModule.forRoot({
          regions: regionsReducer,
          countries: countriesReducer
        })
      ],
      declarations: [HomeComponent],

      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
