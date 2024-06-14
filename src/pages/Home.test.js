import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home.jsx";

jest.mock("../components/Welcome/index.jsx", () => {
  return {
    __esModule: true,
    default: () => <div>WelcomeSection</div>,
  };
});

jest.mock("../components/GuestReview/index.jsx", () => {
  return {
    __esModule: true,
    default: () => <div>GuestReviewSection</div>,
  };
});

jest.mock("../components/Accommodations/index.jsx", () => {
  return {
    __esModule: true,
    default: () => <div>AccommodationsSection</div>,
  };
});

jest.mock("../components/AboutUs/index.jsx", () => {
  return {
    __esModule: true,
    default: () => <div>AboutUsSection</div>,
  };
});

jest.mock("../components/Footer/index.jsx", () => {
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
