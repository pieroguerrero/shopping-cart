import { render, screen } from "@testing-library/react";
import { ShoppingCart } from "../components/ShoppingCart";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("ShoppingCart component", () => {
  it("Showing a Button with 2 children inside", () => {
    render(
      <BrowserRouter>
        <ShoppingCart strPortalDivId={"any"} />
      </BrowserRouter>
    );
    expect(screen.getByRole("button").childElementCount).toBe(2);
  });
});
