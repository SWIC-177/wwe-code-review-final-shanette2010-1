import { CHAMPIONS } from "./src/data";
import { getLastName } from "./src/lib";

// Alphabetize CHAMPIONS by last name
const sortedChampions = CHAMPIONS.toSorted((a, b) =>
  getLastName(a).localeCompare(getLastName(b)),
);

console.log(sortedChampions);
