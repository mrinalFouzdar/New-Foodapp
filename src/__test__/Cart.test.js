import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurnatMenu from "../components/RestaurnatMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { appStore } from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurnatMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Peri Peri Chicken (5)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  // console.log(clickBtn.length)
  fireEvent.click(addBtns[0]);

  expect(screen.getByText(/Cart - 1 Items/)).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

  expect(screen.getByText(/Cart - 2 Items/)).toBeInTheDocument();

  expect(screen.getAllByTestId('foodItems').length).toBe(7)

  fireEvent.click(screen.getByRole('button',{name:'Clear Cart'}))

  expect(screen.getAllByTestId('foodItems').length).toBe(5)

  expect(screen.getByText('Cart is empty. Add Items to the cart!')).toBeInTheDocument()

});
