import { Action } from "@ngrx/store";
import { Region } from "src/app/models/region.model";

export const GET_REGIONS = "GET_REGIONS";

export class GetRegions implements Action {
  readonly type = GET_REGIONS;
  payload: Region;
}

export type RegionsActions = GetRegions;
