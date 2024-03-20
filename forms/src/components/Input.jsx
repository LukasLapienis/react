import React, { useState } from "react";

export const Forms = () => {
  const [text, setText] = useState("");
  const [textShow, setTextShow] = useState("");
  const [select, setSelect] = useState("red");

  const textChange = (event) => {
    setText(event.target.value);
    setTextShow(text); // !!duomenys atsilieka
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText("");
    setTextShow(text);
  };

  const selectChange = (event) => {
    setSelect(event.target.value);
  };

  const [checkBox, setCheckBox] = useState(false);
  //   const [checkBox, setCheckBox] = useState(0);
  const checkBoxChange = () => {
    setCheckBox((checked) => !checked);
    // setCheckBox((checked) => (checked ? 0 : 1));
    console.log(checkBox);
  };

  const [radio, setRadio] = useState("red");
  const radioChange = (event) => {
    setRadio(event.target.value);
  };

  const [range, setRange] = useState("red");
  const rangeChange = (event) => {
    setRange(event.target.value);
  };

  const [forma, setForma] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForma((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(
      `hello ${forma.name}, your email ${forma.email} is registered. thank you. ${forma.message}`
    );
  };

  return (
    <div>
      <input type="text" value={text} onChange={textChange} />

      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={textChange} />
        <button type="submit">submit</button>
      </form>
      <h1>{textShow}</h1>
      <h2>{text}</h2>

      <div>
        <textarea value={text} onChange={textChange}></textarea>
        <select onChange={selectChange}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>
        <p style={{ backgroundColor: select }}>lorem ipsum</p>
        <input type="checkbox" onChange={checkBoxChange} />
      </div>
      <div>
        <input
          type="radio"
          name="colors"
          value="red"
          onChange={radioChange}
          checked={radio === "red"}
        />
        <input
          type="radio"
          name="colors"
          value="green"
          onChange={radioChange}
          checked={radio === "green"}
        />
        <input
          type="radio"
          name="colors"
          value="blue"
          onChange={radioChange}
          checked={radio === "blue"}
        />
        <p>{radio}</p>
      </div>
      <input type="range" value={range} onChange={rangeChange} />
      <h2>{range}</h2>
      <div className="Forma">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={forma.name}
            onChange={handleFormChange}
            name="name"
          />
          <input
            type="email"
            value={forma.email}
            onChange={handleFormChange}
            name="email"
          />
          <textarea
            value={forma.message}
            onChange={handleFormChange}
            name="message"
          ></textarea>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
