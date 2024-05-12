import { BELTS, CHAMPIONS } from "./data";
import { filterItemsByTerm } from "./lib";

export class State {
  #belts = BELTS;

  #champions = CHAMPIONS;

  #search = "";

  get data() {
    const filteredResults = filterItemsByTerm({
      terms1: this.#champions,
      terms2: this.#belts,
      actionTerm: this.#search,
    });

    return {
      champions: filteredResults.terms1,
      belts: filteredResults.terms2,
    };
  }

  get searchState() {
    return this.#search;
  }

  set searchState(value) {
    this.#search = value;
  }
}
