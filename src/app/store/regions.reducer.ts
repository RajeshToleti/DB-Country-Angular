import { Action } from "@ngrx/store";
import * as RegionActions from "./regions.actions";
import { Region } from "src/app/models/region.model";

const initialState = {
  regions: [new Region("Europe"), new Region("Asia")]
};

export function regionsReducer(
  state = initialState,
  action: RegionActions.RegionsActions
) {
  switch (action.type) {
    case RegionActions.GET_REGIONS:
      return {
        ...state,
        regions: [...state.regions, action.payload]
      };
    default:
      return state;
  }
}
