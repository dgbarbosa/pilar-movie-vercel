import { Cast, Crew } from "@/types";

export type MovieCreditResponse = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};
