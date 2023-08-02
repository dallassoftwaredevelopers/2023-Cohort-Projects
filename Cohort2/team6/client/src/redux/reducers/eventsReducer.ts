// eventReducer.ts
import { EventType } from "react-hook-form";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface EventsState {
  events: EventType[];
}

const initialState: EventsState = {
  events: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<EventType>) => {
      state.events.push(action.payload);
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;

