import Search from "./src/components/search";
import Table from "./src/components/table";
import { State } from "./src/state";

const appElement = document.getElementById("app");

const state = new State();

function render(st) {
  appElement.innerHTML = `
  ${Search({ searchValue: st.searchState })}
  ${Table({
    col1: st.data.belts,
    col2: st.data.champions,
    col1Header: "Belt",
    col2Header: "Champion",
  })}
  `;

  document.getElementById("search").addEventListener("input", (e) => {
    // eslint-disable-next-line no-param-reassign -- It's a class with a setter!
    st.searchState = e.target.value;
    render(st);
  });
}

render(state);
