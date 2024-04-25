import { SET_DRAGGABLE_ITEMS } from "../actions/actions";

interface State {
  draggableItems: string[];
}

const initialState: State = {
  draggableItems: [],
};

const reducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case SET_DRAGGABLE_ITEMS:
      return {
        ...state,
        draggableItems: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;