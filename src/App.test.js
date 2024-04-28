import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

jest.mock(
  "./pages/Home",
  () =>
    function Home() {
      return <div>Home Component</div>;
    }
);
jest.mock(
  "./pages/Room",
  () =>
    function Room() {
      return <div>Room Component</div>;
    }
);
jest.mock(
  "./pages/NotFound",
  () =>
    function NotFound() {
      return <div>Not Found Component</div>;
    }
);

const queryClient = new QueryClient();

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
};

describe("App component routing", () => {
  it("should render the Home component for root route", () => {
    renderWithRouter(<App />, { route: "/" });
    expect(screen.getByText("Home Component")).toBeInTheDocument();
  });

  it("should render the Room component for /room/:roomType route", () => {
    renderWithRouter(<App />, { route: "/room/deluxe" });
    expect(screen.getByText("Room Component")).toBeInTheDocument();
  });

  it("should render the NotFound component for non-existent routes", () => {
    renderWithRouter(<App />, { route: "/random" });
    expect(screen.getByText("Not Found Component")).toBeInTheDocument();
  });
});
