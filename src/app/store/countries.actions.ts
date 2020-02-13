import { Action } from "@ngrx/store";
import { Country } from "src/app/models/country.model";

export const ADD_COUNTRIES = "ADD_COUNTRIES";

export class AddCountries implements Action {
  readonly type = ADD_COUNTRIES;

  constructor(public payload: Country[]) {}
}

export type CountriesActions = AddCountries;
