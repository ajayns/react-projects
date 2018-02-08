import { SET_FILTER } from '../constants/action-types';
import { FILTER_ALL } from '../constants/filters';

const filter = (state = FILTER_ALL, action) => {
    switch(action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default filter;