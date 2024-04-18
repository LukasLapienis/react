import React, { useEffect, useState, useCallback } from "react";

export const Usecallback = () => {
  const [textSize, setTextSize] = useState(16);

  const hello = useCallback(() => {
    console.log("hello");
  }, []);
  useEffect(() => {
    hello();
  }, [hello]);

  return (
    <div
      onClick={() => setTextSize((prev) => (prev === 16 ? 40 : 16))}
      style={{ fontSize: textSize + "px" }}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
      incidunt.
    </div>
  );
};
