import { A } from "@solidjs/router";
import { For } from "solid-js";
import { routes } from "../App";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header class={styles.header}>
      <h1 class={styles.logo}>LIAM H.</h1>
      <ul class={styles.nav}>
        <For each={routes}>
          {(route) => (
            <li class={styles.navItem}>
              <A href={route.path} activeClass="t-highlight" end={route.exact}>
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
