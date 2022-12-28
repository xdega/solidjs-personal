import { Component, createSignal, JSX } from "solid-js";
import { lazy, For } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const Blog = lazy(() => import("./pages/Blog"));
const External = lazy(() => import("./pages/External"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

import Header from "./components/Header";

interface ApplicationRoute {
  element: JSX.Element;
  path: string;
  label: string;
  exact: boolean;
}

interface ApplicationRoutes extends Array<ApplicationRoute> {}

// source of truth for application routes
const routes: ApplicationRoutes = [
  {
    element: <Blog />,
    path: "/",
    label: "Blog",
    exact: true,
  },
  {
    element: <External />,
    path: "/external",
    label: "External Links",
    exact: false,
  },
  {
    element: <Portfolio />,
    path: "/portfolio",
    label: "Portfolio",
    exact: false,
  },
];

const App: Component = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <For each={routes}>
          {(route) => (
            <Route
              element={route.element}
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
