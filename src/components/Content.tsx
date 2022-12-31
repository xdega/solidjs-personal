import styles from "./Content.module.css";
import { children } from "solid-js";

export default function Content(props: any) {
  const c = children(() => props.children);
  return <main class={styles.contentContainer}>{c()}</main>;
}
