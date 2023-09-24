import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { appStore } from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument()
});
it("Should load Header component a cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument()
});

it("Should Change Login button to Logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole('button',{name:"LogOut"})
  expect(logoutButton).toBeInTheDocument()
});