export const SET_DRAGGABLE_ITEMS = "SET_DRAGGABLE_ITEMS";
export const SET_TOGGLE_BTN = "SET_DRAGGABLE_ITEMS";
export const COMPUTE_VALUE = "COMPUTE_VALUE"
export const DISPLAY_VALUE = "DISPLAY_VALUE"

export const setDraggableItems = (draggableItems: string[]) => ({
    type: SET_DRAGGABLE_ITEMS as typeof SET_DRAGGABLE_ITEMS,
    payload: draggableItems,
});

export const setToggleBtn = (mode: boolean) => ({
    type: SET_TOGGLE_BTN as typeof SET_TOGGLE_BTN,
    payload: mode,
});

export const computeValue = (value: string) => ({
    type: COMPUTE_VALUE as typeof COMPUTE_VALUE,
    payload: value
})

export const displayValue = (dispValue: string) => ({
    type: DISPLAY_VALUE as typeof DISPLAY_VALUE,
    payload: dispValue
})