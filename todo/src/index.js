import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange = e => this.setState({ text: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = { text: this.state.text };
    this.setState(prev => ({
      items: prev.items.concat(newItem),
      text: ""
    }));
  };
}

class TodoList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.items.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ol>
    );
  }
}

// ========================================

ReactDOM.render(<Todo />, document.getElementById("root"));
