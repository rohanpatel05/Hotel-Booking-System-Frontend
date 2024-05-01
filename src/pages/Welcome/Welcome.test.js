import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Welcome from "./index.js";
import { WELCOMING_AD } from "../../config/textDescriptions";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const mockScrollIntoView = jest.fn();
global.document.getElementById = jest.fn(() => ({
  scrollIntoView: mockScrollIntoView,
}));

describe("Welcome Component", () => {
  beforeEach(() => {
    render(<Welcome />);
  });

  it("renders the top bar correctly", () => {
    expect(screen.getByText("The Hotel")).toBeInTheDocument();
  });

  it("renders the accommodation and book now buttons", () => {
    expect(screen.getByText("Accommodations")).toBeInTheDocument();
    expect(screen.getByText("Book Now")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    const regex = new RegExp(WELCOMING_AD.replace(/\s+/g, "\\s+"));
    expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it("renders the landscape image", () => {
    expect(screen.getByAltText("Landscape")).toBeInTheDocument();
  });

  it("clicking the Accommodations button scrolls to the accommodations section", () => {
    const button = screen.getByText("Accommodations");
    fireEvent.click(button);
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  // it('should have a navigation function tied to the Book Now button', () => {
  //   const navigate = jest.fn();
  //   jest.mock('react-router-dom', () => ({
  //     ...jest.requireActual('react-router-dom'),
  //     useNavigate: () => navigate,
  //   }));

  //   const bookNowButton = screen.getByText('Book Now');
  //   userEvent.click(bookNowButton);
  //   expect(navigate).toHaveBeenCalledWith('/booking');
  // });
});
