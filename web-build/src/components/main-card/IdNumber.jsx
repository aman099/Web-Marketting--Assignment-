import React from "react";

function IdNumber({ idx, loading }) {
  return (
    <span className={`id-number ${loading ? "skeletonIdNumber" : ""}`}>
      <strong>{idx + 1}</strong>
    </span>
  );
}

export default IdNumber;
