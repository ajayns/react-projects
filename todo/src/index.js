import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Todo() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.length) {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: text,
        };
        setItems((prevItems) => [...prevItems, newItem]);
        setText('');
    };

    return (
        <div>
            <h3>TODO</h3>
            <TodoList items={items} />
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={text} />
                <button>Add #{items.length + 1}</button>
            </form>
        </div>
    );
}

function TodoList({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
}

ReactDOM.render(<Todo />, document.getElementById('root'));
