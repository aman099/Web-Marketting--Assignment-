function HamburgerIcon({ setPopupDisplay, loading }) {
  return (
    <div
      onClick={() =>
        !loading ? setPopupDisplay(true) : setPopupDisplay(false)
      }
      className={`hamburger ${loading ? "hamburger-skeleton" : ""}`}
    >
      <span className="hamburger-container">
        <i className="fa-solid fa-bars"></i>
      </span>
    </div>
  );
}

export default HamburgerIcon;
