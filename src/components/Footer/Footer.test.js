import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./index.jsx";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE_NUMBER,
  COMPANY_FACEBOOK,
  COMPANY_INSTAGRAM,
  COMPANY_POLICY,
} from "../../config/textDescriptions";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders the company name in the title", () => {
    expect(screen.getByText("The Hotel")).toBeInTheDocument();
  });

  it("displays company contact information correctly", () => {
    expect(screen.getByText(COMPANY_ADDRESS)).toBeInTheDocument();
    expect(screen.getByText(COMPANY_EMAIL)).toBeInTheDocument();
    expect(screen.getByText(COMPANY_PHONE_NUMBER)).toBeInTheDocument();
  });

  it("contains correct social media links", () => {
    expect(screen.getByText(COMPANY_FACEBOOK)).toBeInTheDocument();
    expect(screen.getByText(COMPANY_INSTAGRAM)).toBeInTheDocument();
  });

  it("shows the company policy", () => {
    expect(screen.getByText(COMPANY_POLICY)).toBeInTheDocument();
  });

  it("ensures that all text elements are aligned as expected", () => {
    const topLeftAlignedText = screen.getByText(COMPANY_ADDRESS);
    const topCenterAlignedText = screen.getByText(COMPANY_EMAIL);
    const topRightAlignedText = screen.getByText(COMPANY_PHONE_NUMBER);
    const bottomLeftAlignedText = screen.getByText(COMPANY_FACEBOOK);
    const bottomCenterAlignedText = screen.getByText(COMPANY_INSTAGRAM);
    const bottomRightAlignedText = screen.getByText(COMPANY_POLICY);

    expect(topLeftAlignedText).toHaveStyle("text-align: left");
    expect(topCenterAlignedText).toHaveStyle("text-align: center");
    expect(topRightAlignedText).toHaveStyle("text-align: right");
    expect(bottomLeftAlignedText).toHaveStyle("text-align: left");
    expect(bottomCenterAlignedText).toHaveStyle("text-align: center");
    expect(bottomRightAlignedText).toHaveStyle("text-align: right");
  });
});
