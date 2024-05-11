import Search from "./src/components/search";
import Table from "./src/components/table";
import { BELTS, CHAMPIONS } from "./src/data";

const appElement = document.getElementById("app");

function render() {
  appElement.innerHTML = `
  ${Search()}
  ${Table({
    col1: BELTS,
    col2: CHAMPIONS,
    col1Header: "Belt",
    col2Header: "Champion",
  })};
  `;
}

render();
