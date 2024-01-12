import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Guests } from "../guests";

describe("Guests", () => {
  it("renders multiple guests with correct text", () => {
    render(
      <Guests
        {...{
          adults: 2,
          children: 2,
          infants: 2,
        }}
      />
    );

    const guests = screen.getByText("Adults", {
      exact: false,
    });
    expect(guests.textContent).toEqual("2 Adults, 2 children & 2 infants");
  });

  it("renders single guests with correct text", () => {
    render(
      <Guests
        {...{
          adults: 1,
          children: 1,
          infants: 1,
        }}
      />
    );
    const guests = screen.getByText("Adult", {
      exact: false,
    });
    expect(guests.textContent).toEqual("1 Adult, 1 child & 1 infant");
  });

  it("renders adults only", () => {
    render(
      <Guests
        {...{
          adults: 2,
        }}
      />
    );
    const guests = screen.getByText("Adult", {
      exact: false,
    });
    expect(guests.textContent).toEqual("2 Adults");
  });

  it("renders adults and children only", () => {
    render(
      <Guests
        {...{
          adults: 2,
          children: 2,
        }}
      />
    );
    const guests = screen.getByText("Adult", {
      exact: false,
    });
    expect(guests.textContent).toEqual("2 Adults, 2 children");
  });

  it("renders adults and infants only", () => {
    render(
      <Guests
        {...{
          adults: 2,
          infants: 2,
        }}
      />
    );
    const guests = screen.getByText("Adult", {
      exact: false,
    });
    expect(guests.textContent).toEqual("2 Adults & 2 infants");
  });
});
