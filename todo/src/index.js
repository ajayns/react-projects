import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} onclick={this.toggleCompleted.bind(this)} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    toggleCompleted(i) {
        let updatedItems = this.state.items;
        updatedItems.map(item => {
            if (item.id === i.id)
                item.completed = !item.completed;
        })
        console.log(updatedItems)
        this.setState({
            items: updatedItems
        })
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text,
            completed: false
        }
        this.setState(prev => ({
            items: prev.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <div key={item.id}>
                        <input type="checkbox" onClick={() => this.props.onclick(item)} />
                        <span className={item.completed ? 'completed' : 'not-completed'}>{item.text}</span>
                    </div>
                ))}
            </ul>
        )
    }
}


// ========================================

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
);
