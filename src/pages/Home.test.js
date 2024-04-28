import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

jest.mock("./Welcome/index.js", () => {
  return {
    __esModule: true,
    default: () => <div>WelcomeSection</div>,
  };
});

jest.mock("./GuestReview/index.js", () => {
  return {
    __esModule: true,
    default: () => <div>GuestReviewSection</div>,
  };
});

jest.mock("./Accommodations/index.js", () => {
  return {
    __esModule: true,
    default: () => <div>AccommodationsSection</div>,
  };
});

jest.mock("./AboutUs/index.js", () => {
  return {
    __esModule: true,
    default: () => <div>AboutUsSection</div>,
  };
});

jest.mock("../components/Footer/index.js", () => {
  return {
    __esModule: true,
    default: () => <div>FooterSection</div>,
  };
});

describe("Home component", () => {
  it("renders the Welcome section", () => {
    render(<Home />);
    expect(screen.getByText("WelcomeSection")).toBeInTheDocument();
  });

  it("renders the Guest Review section", () => {
    render(<Home />);
    expect(screen.getByText("GuestReviewSection")).toBeInTheDocument();
  });

  it("renders the Accommodations section", () => {
    render(<Home />);
    expect(screen.getByText("AccommodationsSection")).toBeInTheDocument();
  });

  it("renders the About Us section", () => {
    render(<Home />);
    expect(screen.getByText("AboutUsSection")).toBeInTheDocument();
  });

  it("renders the Footer", () => {
    render(<Home />);
    expect(screen.getByText("FooterSection")).toBeInTheDocument();
  });
});
