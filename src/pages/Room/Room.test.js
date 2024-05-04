import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Room from "./index.jsx";
import configureStore from "redux-mock-store";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock(
  "../NotFound",
  () =>
    function NotFound() {
      return <div>Not Found Component</div>;
    }
);

const mockStore = configureStore();
const store = mockStore({
  rooms: {
    value: [
      {
        type: "single",
        description: "Single room with a single bed.",
        beds: 1,
        amenities: ["WiFi", "TV"],
        price: 100,
      },
    ],
  },
});

describe("Room Component", () => {
  beforeEach(() => {
    useParams.mockClear();
    useSelector.mockClear();
  });

  it("renders room information when roomType is found", () => {
    useParams.mockReturnValue({ roomType: "single" });
    useSelector.mockImplementation((callback) => callback(store.getState()));
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Room />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText("Single room with a single bed.")
    ).toBeInTheDocument();
    expect(screen.getByText("1 Standard Beds")).toBeInTheDocument();
    expect(screen.getByText("Amenities: WiFi, TV")).toBeInTheDocument();
    expect(screen.getByText("Price: $100/night")).toBeInTheDocument();
  });

  it("renders NotFound component when roomType is not found", () => {
    useParams.mockReturnValue({ roomType: "suite" });
    useSelector.mockImplementation((callback) => callback(store.getState()));
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Room />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Not Found Component")).toBeInTheDocument();
  });

  it("displays the correct image for the room", () => {
    useParams.mockReturnValue({ roomType: "single" });
    useSelector.mockImplementation((callback) => callback(store.getState()));
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Room />
        </MemoryRouter>
      </Provider>
    );

    const image = screen.getByAltText("Room image.");
    expect(image).toBeInTheDocument();
  });
});
