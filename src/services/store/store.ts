import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

interface State {
  draggableItems: string[];
  mode: boolean;
  value: string;
  dispValue: string;
}

const initialState: State = {
  draggableItems: [],
  mode: true,
  value: "",
  dispValue: "",
};

export const setDraggableItems = createAction<string[]>("setDraggableItems");
export const setToggleBtn = createAction<boolean>("setToggleBtn");
export const computeValue = createAction<string>("computeValue");
export const displayValue = createAction<string>("dispValue");

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setDraggableItems, (state, action) => {
    state.draggableItems = action.payload;
  });
  builder.addCase(setToggleBtn, (state, action) => {
    state.mode = action.payload;
  });
  builder.addCase(computeValue, (state, action) => {
    state.value = action.payload;
  });
  builder.addCase(displayValue, (state, action) => {
    state.dispValue = action.payload;
  });
});

const store = configureStore({
  reducer,
});

export default store;