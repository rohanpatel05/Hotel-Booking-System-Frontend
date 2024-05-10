import React from "react";
import { render, screen } from "@testing-library/react";
import GuestReview from "./index.jsx";
import { REVIEWS } from "../../config/textDescriptions";

describe("GuestReview Component", () => {
  it("renders the title correctly", () => {
    render(<GuestReview />);
    expect(screen.getByText("What our guests says")).toBeInTheDocument();
  });

  it("renders all guest reviews", () => {
    render(<GuestReview />);
    REVIEWS.forEach((review) => {
      expect(screen.getByText(review.review)).toBeInTheDocument();
      expect(screen.getByText(review.guestName)).toBeInTheDocument();
    });
  });

  it("each review is contained in a card component", () => {
    render(<GuestReview />);
    REVIEWS.forEach((review) => {
      const reviewCard = screen.getByText(review.review).closest(".card-body");
      expect(reviewCard).toBeInTheDocument();
      expect(reviewCard).toHaveTextContent(review.review);
      expect(reviewCard).toHaveTextContent(review.guestName);
    });
  });
});
