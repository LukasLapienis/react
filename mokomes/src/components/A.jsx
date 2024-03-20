import React from "react";

export const A = ({ sqArr, number }) => {
  return (
    <div className="sqContainer componentA">
      {sqArr.map((_, i) => (
        <div key={i} className="kvadr kvadr_0">
          {number}
        </div>
      ))}
    </div>
  );
};
