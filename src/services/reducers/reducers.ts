import { SET_DRAGGABLE_ITEMS, SET_TOGGLE_BTN  } from "../actions/actions";
import { COMPUTE_VALUE, DISPLAY_VALUE } from "../actions/actions";

interface State {
    draggableItems: string[];
    mode: boolean;
    value: string[];
    dispValue: string[];
}

const initialState: State = {
    draggableItems: [],
    mode: false,
    value: [],
    dispValue: [],
};

const reducer = (state = initialState, action: any): State => {
switch (action.type) {
    case SET_DRAGGABLE_ITEMS:
    return {
    ...state,
    draggableItems: action.payload,
    };
    case SET_TOGGLE_BTN:
    return{
        ...state,
        mode:action.payload,
    };
    case COMPUTE_VALUE:
        return{
            ...state,
            value:action.payload,
        };
    case DISPLAY_VALUE:
        return{
            ...state,
            dispValue:action.payload,
        };
    default:
    return state;
}
};

export default reducer;