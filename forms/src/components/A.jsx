import React, { useState } from "react";

export const A = () => {
  const [text, setText] = useState("");

  const [showText, setShowText] = useState(text);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowText(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={text} />
        <button type="submit">submit</button>
      </form>
      <h1>{showText}</h1>
    </div>
  );
};
