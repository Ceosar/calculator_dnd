import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

interface State {
  draggableItems: string[];
}

const initialState: State = {
  draggableItems: [],
};

export const setDraggableItems = createAction<string[]>("setDraggableItems");

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setDraggableItems, (state, action) => {
    state.draggableItems = action.payload;
  });
});

const store = configureStore({
  reducer,
});

export default store;