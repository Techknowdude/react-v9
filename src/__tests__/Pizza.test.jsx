import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt text renders on Pizza image", async () => {
  const name = "My favorite Pizza";
  const src = "http://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="Super cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const name = "My other favorite Pizza";
  const src = "http://picsum.photos/200";
  const screen = render(<Pizza name={name} description="Super cool pizza 2" />);

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
