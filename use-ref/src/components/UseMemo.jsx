import React, { useEffect, useState, useCallback, useMemo } from "react";

export const UseMemo = () => {
  const [textSize, setTextSize] = useState(16);

  const cat = useMemo(() => ({ big: "yep", black: "nope" }), []);

  const hello = useCallback(() => {
    console.log("hello", cat);
  }, [cat]);
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
