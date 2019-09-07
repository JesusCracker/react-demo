const counter = (state = 2 , action = {}) => {
    switch (action.type) {
        case 'INCREMENT':
            // throw new Error('xxxx');
            return state + 1;
        case 'DECREMENT':
            return state - 1;

        default:
            return state;
    }
};

export default counter;