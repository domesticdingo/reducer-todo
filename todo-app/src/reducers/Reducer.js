export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export function reducer(state, action) {
    switch(action.type) {
        case "ADD_NEW":
            return [...state, action.payload]
        case "TOGGLE":
            return state.map((item) => {
                return item.id === action.payload ?
                {...item, completed: !item.completed} : item
            })
        case "PURGE_COMPLETED":
            return state.filter((item) => !item.completed)

        default:
            return state;
    }
};