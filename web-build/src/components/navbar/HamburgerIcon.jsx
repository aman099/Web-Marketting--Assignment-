function HamburgerIcon({ setPopupDisplay }) {
  return (
    <div onClick={() => setPopupDisplay(true)} className="hamburger">
      <span className="hamburger-container">
        <i className="fa-solid fa-bars"></i>
      </span>
    </div>
  );
}

export default HamburgerIcon;
