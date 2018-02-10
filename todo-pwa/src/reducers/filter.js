// Check localStorage for saved filter state, else init with FILTER_ALL

import { SET_FILTER } from '../constants/action-types';
import { FILTER_ALL } from '../constants/filters';

const storedFilter = localStorage.getItem('filter') || FILTER_ALL;

const filter = (state = storedFilter, action) => {
    switch(action.type) {
        case SET_FILTER:
            localStorage.setItem('filter', action.filter);
            return action.filter;
        default:
            return state;
    }
}

export default filter;