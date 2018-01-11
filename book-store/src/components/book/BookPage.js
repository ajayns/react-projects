import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
    constructor(props) {
        // Pass props to parent
        super(props);
    }

    // Submit book handler
    submitBook(input) {
        this.props.createBook(input);
    }

    render() {
        let titleInput;
        return (
            <div>
                <h3>Books</h3>
                <ul>
                    {this.props.books
                        .map((b,i) => 
                            <li key={i}>{b.title}</li>
                        )
                    }
                </ul>
                <form onSubmit={e => {
                        // Prevent form from redirect
                        e.preventDefault();
                        // Call handler
                        this.submitBook({title: titleInput.value});
                        // Reset form after submit
                        e.target.reset();
                    }
                }>
                    <input type="text" name="title" ref={node => titleInput = node}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        createBook: book => dispatch(bookActions.createBook(book))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);