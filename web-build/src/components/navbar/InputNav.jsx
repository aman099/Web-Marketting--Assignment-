function InputNav({ loading }) {
  return (
    <div
      className={`input-container ${loading ? "input-container-skeleton" : ""}`}
    >
      <input type="text" />
      <span>
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
    </div>
  );
}

export default InputNav;
