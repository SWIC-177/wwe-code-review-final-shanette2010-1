import Table from "./src/components/table";
import { BELTS, CHAMPIONS } from "./src/data";

const appElement = document.getElementById("app");

appElement.innerHTML = Table({
  col1: BELTS,
  col2: CHAMPIONS,
  col1Header: "Belt",
  col2Header: "Champion",
});
