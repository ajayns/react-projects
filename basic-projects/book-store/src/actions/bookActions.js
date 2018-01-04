export const createBook = (book) => {
    // Return action
    return {
        // Type of action
        type: 'CREATE_BOOK',
        // Payload
        book
    };
};