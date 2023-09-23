import { render, screen } from "@testing-library/react";
import { RestaurantCard,withDiscountedLabel } from "../components/RestaurantCard";
import MockData from "../mocks/resCardMock.json";
import DiscountRescartData from '../mocks/discountResCardMocData.json'

import "@testing-library/jest-dom";

it("should render RestaurantCard componet with props Data", () => {
  render(<RestaurantCard resData={MockData} />);

  const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  expect(name).toBeInTheDocument();
});


it('should render RestaurantCard component with Discounted Label',()=>{
  const RestaurantCardDiscounted = withDiscountedLabel(RestaurantCard)


  render(<RestaurantCardDiscounted resData={DiscountRescartData}/>)

  const discount = screen.getByText(/discount/i);
  expect(discount).toBeInTheDocument()
})