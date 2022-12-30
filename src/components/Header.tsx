import { A } from "@solidjs/router";
import { For } from "solid-js";
import { routes } from "../App";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1 class="t-highlight">Liam H.</h1>
      <ul>
        <For each={routes}>
          {(route) => (
            <li>
              <A
                class={Styles.A}
                href={route.path}
                activeClass="t-highlight"
                end={route.exact}
              >
                {route.label}
              </A>
            </li>
          )}
        </For>
      </ul>
    </header>
  );
};

export default Header;
