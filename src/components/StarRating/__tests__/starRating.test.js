import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StarRating } from "../starRating";

describe("StarRating", () => {
  it.each([[1], [2], [3], [4], [5]])(
    "renders correct number of stars for rating",
    (rating) => {
      render(<StarRating rating={rating} />);

      expect(screen.getAllByTestId("star").length).toBe(rating);
    }
  );

  it("renders maximum 5 stars if rating is higher than 5", () => {
    render(<StarRating rating={6} />);

    expect(screen.getAllByTestId("star").length).toBe(5);
  });

  it("renders 0 stars for rating less than 1", () => {
    render(<StarRating rating={0} />);

    expect(screen.queryAllByTestId("star")).toHaveLength(0);
  });
});
