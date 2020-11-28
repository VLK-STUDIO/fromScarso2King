import { GoodMorning } from "../../../types";
import { ListData, DomainState } from "../../types";

export type GoodMorningStateData = ListData<GoodMorning>;

export type GoodMorningState = DomainState<GoodMorningStateData> & {
  currentGoodMorning?: GoodMorning | Partial<GoodMorning>;
};
