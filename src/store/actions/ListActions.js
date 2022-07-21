import Item from "../../components/Item";

export const addItem = (text) => {
    const item = new Item(text);
    return { type: "ADD_ITEM", payload: item };
};

export const deleteItem = (id) => {
    return { type: "DELETE_ITEM", payload: id };
};

export const changeDone = (id) => {
    return { type: "CHANGE_DONE", payload: id };
};