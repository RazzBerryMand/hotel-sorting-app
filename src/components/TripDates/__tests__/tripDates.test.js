import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TripDates } from "../tripDates";

describe("TripDates", () => {
  it("renders trip dates and duration correctly in expected format", () => {
    const outboundDateMock = new Date("2022-01-12");
    const inboundDateMock = new Date("2022-01-17");

    render(
      <TripDates
        outbound={outboundDateMock.toISOString()}
        inbound={inboundDateMock.toISOString()}
      />
    );

    const expectedOutboundFormatted = "12th January 2022";
    const expectedDurationInDays = 5;
    expect(screen.getByText(expectedOutboundFormatted)).toBeInTheDocument();
    expect(
      screen.getByText(`${expectedDurationInDays} days`)
    ).toBeInTheDocument();
  });
});
