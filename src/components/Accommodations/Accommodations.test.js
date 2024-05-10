import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Accommodations from "./index.jsx";
import { store } from "../../app/store"; // Assuming the path to your Redux store

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

jest.mock("../../services/roomService");

const roomsData = [
  { id: 1, type: "single", description: "Single room description" },
  { id: 2, type: "double", description: "Double room description" },
  { id: 3, type: "suite", description: "Suite room description" },
];

describe("Accommodations Component", () => {
  beforeEach(() => {
    useQuery.mockImplementation(() => ({
      data: roomsData,
      isLoading: false,
      isError: false,
      isSuccess: true,
      error: null,
    }));
  });

  it("renders loading spinner when data is fetching", () => {
    useQuery.mockImplementationOnce(() => ({ isLoading: true }));
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Accommodations />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("displays error message if data fetching fails", () => {
    useQuery.mockImplementationOnce(() => ({
      isError: true,
      error: { message: "Failed to fetch rooms" },
    }));
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Accommodations />
        </BrowserRouter>
      </Provider>
    );
    expect(
      screen.getByText("Error loading rooms' info: Failed to fetch rooms")
    ).toBeInTheDocument();
  });

  it("renders rooms correctly when data is successfully fetched", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Accommodations />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      roomsData.forEach((room) => {
        expect(screen.getByText(room.description)).toBeInTheDocument();
        expect(screen.getByText(room.type)).toBeInTheDocument();
      });
    });
  });
});
