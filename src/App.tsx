import { Component, createSignal, JSX } from "solid-js";
import { lazy, For } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const Blog = lazy(() => import("./pages/Blog"));
const External = lazy(() => import("./pages/External"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

import Header from "./components/Header";

interface ApplicationRoute {
  element?: JSX.Element;
  component?: Component;
  path: string;
  label: string;
  exact: boolean;
}

interface ApplicationRoutes extends Array<ApplicationRoute> {}

// source of truth for application routes
const routes: ApplicationRoutes = [
  {
    component: Blog,
    path: "/",
    label: "BLOG",
    exact: true,
  },
  {
    component: Portfolio,
    path: "/projects",
    label: "PROJECTS",
    exact: false,
  },
  {
    component: External,
    path: "/external",
    label: "EXTERNAL LINKS",
    exact: false,
  },
];

const App: Component = () => {
  return (
    <>
      <Header />
      <Routes>
        <For each={routes}>
          {(route) => (
            <Route
              component={route.component}
              path={route.path}
              {...{ end: route.exact }} // hacky, but wrapping this in an object to pass it through as boolean
            ></Route>
          )}
        </For>
      </Routes>
    </>
  );
};

export { App, routes };
