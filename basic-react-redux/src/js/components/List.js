import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Get state from store to props
const mapStateToProps = state => {
    return { articles: state.articles};
};

const ConnectedList = ({articles}) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

// Wire it up together, check types and export
const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default List;