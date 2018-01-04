export default (state = [], action) => {
    switch(action.type) {
        // Check if action is create book
        case 'CREATE_BOOK':
            return [
                ...state,
                Object.assign({}, action.book)
            ];
        default:
            return state;
    }
};