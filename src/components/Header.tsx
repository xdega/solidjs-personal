import { A } from "@solidjs/router";
import { For } from "solid-js";
import { routes } from "../App";

const Header = () => {
  return (
    <header>
      <h1>Liam H.</h1>
      <ul>
        <For each={routes}>
          {(route) => (
            <li>
              <A href={route.path}>{route.label}</A>
            </li>
          )}
        </For>
      </ul>
    </header>
  );
};

export default Header;
