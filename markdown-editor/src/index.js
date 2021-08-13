import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Remarkable from "remarkable";

const MarkdownEditor = () => {
  const [text, setText] = React.useState("Type some *markdown* here!");

  const getRawMarkup = () => {
    const md = new Remarkable();
    return { __html: md.render(text) };
  };

  return (
    <div className="container">
      <div className="input">
        <h3>Input</h3>
        <textarea
          className="input-text"
          onChange={e => setText(e.target.value)}
          defaultValue={text}
        />
      </div>
      <div className="output">
        <h3>Markdown</h3>
        <div
          dangerouslySetInnerHTML={getRawMarkup()}
          className="output-text"
        ></div>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<MarkdownEditor />, document.getElementById("root"));
