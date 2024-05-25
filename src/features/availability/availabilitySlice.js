import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  checkInDate: null,
  checkOutDate: null,
  totalAmount: null,
};

export const availabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setAvailabilityData: (state, action) => {
      state.data = action.payload.data;
      state.checkInDate = action.payload.checkInDate;
      state.checkOutDate = action.payload.checkOutDate;
      state.totalAmount = action.payload.totalAmount;
    },
    resetAvailabilityData: (state) => {
      state.data = null;
      state.checkInDate = null;
      state.checkOutDate = null;
      state.totalAmount = null;
    },
  },
});

export const { setAvailabilityData, resetAvailabilityData } =
  availabilitySlice.actions;

export default availabilitySlice.reducer;
