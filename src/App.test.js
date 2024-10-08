import { render } from "@testing-library/react";
import App from "./App";

test("renders react app with docker", () => {
  const app = render(<App />);
  const linkElement = app.getByText("React app with docker");
  expect(linkElement).toBeInTheDocument();
});
