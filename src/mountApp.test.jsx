import { act } from "react";
import { renderToString } from "react-dom/server";
import { mountApp } from "./mountApp";

const Page = () => <p>hi</p>;

test("hydrates a prerendered container: the existing DOM nodes are kept", () => {
  const container = document.createElement("div");
  container.innerHTML = renderToString(<Page />);
  const prerendered = container.firstChild;
  act(() => {
    mountApp(container, <Page />);
  });
  expect(container.firstChild).toBe(prerendered);
  expect(container.textContent).toBe("hi");
});

test("renders into an empty container (dev server, app shell)", () => {
  const container = document.createElement("div");
  act(() => {
    mountApp(container, <Page />);
  });
  expect(container.innerHTML).toBe("<p>hi</p>");
});
