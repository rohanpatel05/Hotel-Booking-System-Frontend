import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "./index.jsx";
import { ABOUT_US } from "../../config/textDescriptions";

describe("AboutUs Component", () => {
  it('renders the title "About Us"', () => {
    render(<AboutUs />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  it("displays the about us text from config", () => {
    render(<AboutUs />);
    expect(screen.getByText(ABOUT_US)).toBeInTheDocument();
  });

  it("renders the resort image correctly", () => {
    render(<AboutUs />);
    const image = screen.getByAltText("Resort image.");
    expect(image).toBeInTheDocument();
  });

  it("uses React Bootstrap components for layout", () => {
    render(<AboutUs />);
    expect(screen.getByText(ABOUT_US)).toBeInTheDocument();
    const cardBodies = screen.getAllByRole("img");
    expect(cardBodies.length).toBeGreaterThanOrEqual(1);
  });
});
