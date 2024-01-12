import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BookNowCta } from "../bookNowCta";

describe("BookNowCta", () => {
  const mockPrice = 399.99;

  it("renders the button with the correct content", () => {
    render(<BookNowCta price={mockPrice} />);

    expect(screen.getByText("Book now")).toBeInTheDocument();
    expect(screen.getByText("£399.99")).toBeInTheDocument();
  });

  it("formats the price correctly", () => {
    render(<BookNowCta price={mockPrice} />);

    expect(screen.getByText("£399.99")).toBeInTheDocument();
  });

  it("triggers the alert on button click", () => {
    render(<BookNowCta price={mockPrice} />);

    jest.spyOn(window, "alert").mockImplementation(() => {});
    fireEvent.click(screen.getByText("Book now"));
    expect(window.alert).toHaveBeenCalledWith("Great choice!");
  });
});
