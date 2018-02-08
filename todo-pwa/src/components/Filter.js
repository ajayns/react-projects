import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setFilter } from '../actions';
import { FILTER_COMPLETED, FILTER_ALL, FILTER_ACTIVE } from '../constants/filters';

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (e) => dispatch(setFilter(e.target.value))
    }
}

const Dropdown = styled.div`
    margin: 3em 0 0 0;
`;

const Filter = ({onChangeFilter}) => {
    return (
        <Dropdown className="row flex-right">
            <span className="padding-right-small">Show:</span>
            <select onChange={onChangeFilter}>
                <option value={FILTER_ALL}>All</option>
                <option value={FILTER_ACTIVE}>Active</option>
                <option value={FILTER_COMPLETED}>Completed</option>
            </select>
        </Dropdown>        
    );
}

export default connect(null, mapDispatchToProps)(Filter);

