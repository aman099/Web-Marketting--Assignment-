import React from "react";

function ConditionalBestTag({ idx, conditionalBestTag }) {
  return (
    <span className={`absolute ${conditionalBestTag}`}>
      <i className={`fa-solid ${idx === 0 ? "fa-trophy" : "fa-gem"}`}></i>
      <strong>Best {idx === 0 ? "Choice" : "Value"}</strong>
    </span>
  );
}

export default ConditionalBestTag;
