import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../features/rooms/roomsSlice";
import availabilityReducer from "../features/availability/availabilitySlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    availability: availabilityReducer,
  },
});
