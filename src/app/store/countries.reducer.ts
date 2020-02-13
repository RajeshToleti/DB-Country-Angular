import * as CountriesActions from "./countries.actions";
import { Country } from "src/app/models/country.model";

const initialState = {
  countries: []
};

export function countriesReducer(
  state = initialState,
  action: CountriesActions.CountriesActions
) {
  switch (action.type) {
    case CountriesActions.ADD_COUNTRIES:
      return {
        countries: action.payload
      };
    default:
      return state;
  }
}
