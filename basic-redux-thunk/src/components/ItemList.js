import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items')
    }

    render() {
        if (this.props.hasErrored) {
            return <p>There has been an Error</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

// Get state data from store to props
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
}

// Get actions to handle store data
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
}

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
