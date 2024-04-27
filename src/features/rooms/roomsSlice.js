import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    updateRooms: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = [];
    },
  },
});

export const { updateRooms, reset } = roomsSlice.actions;

export default roomsSlice.reducer;
