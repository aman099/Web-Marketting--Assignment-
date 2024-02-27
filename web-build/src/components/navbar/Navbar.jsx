import { useState } from "react";
import "./Navbar.scss";

import HamburgerIcon from "./HamburgerIcon";
import PopupMenu from "./PopupMenu";
import InputNav from "./InputNav";

const menuItems = ["Categories", "Website Builders", "Today's deals"];

function Navbar({ loading }) {
  const [popupDisplay, setPopupDisplay] = useState(false);

  return (
    <>
      <PopupMenu
        popupDisplay={popupDisplay}
        setPopupDisplay={setPopupDisplay}
        menuItems={menuItems}
      />
      <nav id="navbar">
        <div className="navbar-container">
          <InputNav loading={loading} />
          <ul className={`flex nav-flex ${loading ? "nav-flex-skeleton" : ""}`}>
            {menuItems.map((menu, idx) => (
              <li key={idx}>{menu}</li>
            ))}
          </ul>
          <HamburgerIcon setPopupDisplay={setPopupDisplay} loading={loading} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
