import { render } from "@testing-library/react";
import App from "./App";
import ProductDetailsView from "./components/ProductDetailsView";

const title = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops";
const mockedProducts = [
  {
    id: 1,
    title: title,
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
test("renders store header", () => {
  const elem = render(<App />);
  const headerElem = elem.getByText(/ecommerce site/i);
  expect(headerElem).toBeInTheDocument();
});

test("renders product details", () => {
  const elem = render(<ProductDetailsView details={mockedProducts[0]} />);
  expect(elem).toMatchSnapshot();
});

test("renders product details title", () => {
  const elem = render(<ProductDetailsView details={mockedProducts[0]} />);
  const titleElem = elem.getByTestId("title");
  expect(titleElem).toBeInTheDocument();
});
