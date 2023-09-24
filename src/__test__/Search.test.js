import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
// fetch return promise -> promise return as a json -> and we convert that as a json -> it return promise again -> when we resolve that promise we got data
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for bur text", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforSearch = screen.getAllByTestId("resCard");
  expect(cardBeforSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  expect(searchButton).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");
  // console.log(searchInput)
  fireEvent.change(searchInput, { target: { value: "bu" } });

  fireEvent.click(searchButton);

  // screen should load 3 card
  let card = screen.getAllByTestId("resCard");
  // console.log(card)

  expect(card.length).toBe(4);
});

it("Should render top rated restaurant after click on the Top Rated Restaurants button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeTopRatedButtonClick = screen.getAllByTestId('resCard')
  expect(cardBeforeTopRatedButtonClick.length).toBe(20)

  const topRatedButton = screen.getByRole('button',{name:'Top Rated Restaurants'})
  expect(topRatedButton).toBeInTheDocument()

  fireEvent.click(topRatedButton)

  const cardAfterClicTopRatedButton = screen.getAllByTestId('resCard')
  expect(cardAfterClicTopRatedButton.length).toBe(17)
  
});
