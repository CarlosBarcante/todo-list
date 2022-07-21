const SAVED_ITEMS = 'savedItems';
let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
if (!savedItems) savedItems = [];

const ListReducer = (state = savedItems, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];
        case "DELETE_ITEM":
            return state.filter(item => item.id !== action.payload);
        case "CHANGE_DONE":
            return state.map(item => {
                if (item.id === action.payload) {
                    item.done = !item.done;
                }
                return item;
            });
        default:
            return state;
    }
}

export default ListReducer;