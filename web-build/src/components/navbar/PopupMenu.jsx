function PopupMenu({ popupDisplay, setPopupDisplay, menuItems, loading }) {
  return (
    <div className={`popup-menu ${popupDisplay ? "pop" : ""}`}>
      <span
        onClick={() => setPopupDisplay(false)}
        className={`x ${popupDisplay ? "pop" : ""}`}
      >
        <i className="fa-solid fa-x"></i>
      </span>
      <ul className={`flex popup-menu-container ${popupDisplay ? "pop" : ""}`}>
        {menuItems.map((menu, idx) => (
          <li key={idx} className={`${popupDisplay ? "pop" : ""}`}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopupMenu;
