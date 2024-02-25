import React from "react";

function IdNumber({ idx }) {
  return (
    <span className="id-number">
      <strong>{idx + 1}</strong>
    </span>
  );
}

export default IdNumber;
