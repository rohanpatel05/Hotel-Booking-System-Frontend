import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./index.js";

describe("NotFound Component", () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  it("displays a 404 heading", () => {
    expect(screen.getByText("404 - Page Not Found")).toBeInTheDocument();
  });

  it("informs the user that the page does not exist", () => {
    expect(
      screen.getByText("The page you are looking for does not exist.")
    ).toBeInTheDocument();
  });

  it("suggests going back to the home page", () => {
    const partialText = screen.getByText(/please go to/i);
    expect(partialText).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /the home page/i });
    expect(link).toBeInTheDocument();
  });

  it("provides a link to the home page", () => {
    const link = screen.getByRole("link", { name: /the home page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
