import { A } from "@solidjs/router";
import { For } from "solid-js";
import { routes } from "../App";
import styles from "./Header.module.css";

const Header = () => {
  const isLastItem = (index: number) => {
    return Boolean(index === routes.length - 1);
  };
  return (
    <header class={styles.header}>
      <h1 class="t-highlight">Liam H.</h1>
      <ul class={styles.nav}>
        <For each={routes}>
          {(route, index) => (
            <li classList={{ [styles.lastItem]: isLastItem(index()) }}>
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
