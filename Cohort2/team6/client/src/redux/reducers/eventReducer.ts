// eventReducer.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";

export interface Event {
  id: number;
  title: string;
  description: string;
  price: number;
  dateTime: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

interface EventState {
  events: Event[];
}

const initialState: EventState = {
  events: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
  },
});

export const { addEvent } = eventSlice.actions;

export default eventSlice.reducer;

// Asynchronous action to add an event using Thunk
export const createEvent = (event: Event) => {
  return (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(addEvent(event));
    }, 1000);
  };
};
