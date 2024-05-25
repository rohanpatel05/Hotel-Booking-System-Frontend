import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  checkInDate: null,
  checkOutDate: null,
};

export const availabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setAvailabilityData: (state, action) => {
      state.data = action.payload;
      state.checkInDate = action.payload.checkInDate;
      state.checkOutDate = action.payload.checkOutDate;
    },
    resetAvailabilityData: (state) => {
      state.data = null;
      state.checkInDate = null;
      state.checkOutDate = null;
    },
  },
});

export const { setAvailabilityData, resetAvailabilityData } =
  availabilitySlice.actions;

export default availabilitySlice.reducer;
