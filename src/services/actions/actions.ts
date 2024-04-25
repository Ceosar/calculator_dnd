export const SET_DRAGGABLE_ITEMS = "SET_DRAGGABLE_ITEMS";

export const setDraggableItems = (draggableItems: string[]) => ({
  type: SET_DRAGGABLE_ITEMS as typeof SET_DRAGGABLE_ITEMS,
  payload: draggableItems,
});

