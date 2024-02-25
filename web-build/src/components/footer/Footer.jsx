import { Fragment } from "react";
import "./Footer.scss";
import Select from "./Select";

const footerData = [
  {
    title: "Categories",
    menu_1: "Web Builder",
    menu_2: "Hosting",
    menu_3: "Data Center",
    menu_4: "Robotic-Automation",
    menu_5: "",
  },
  {
    title: "Contact",
    menu_1: "Contact",
    menu_2: "Privacy Policy",
    menu_3: "Terms Of Service",
    menu_4: "Categories",
    menu_5: "About",
  },
  {
    title: "United States",
    menu_1: "India",
    menu_2: "Japan",
    menu_3: "Russia",
    menu_4: "China",
    menu_5: "France",
  },
];

function Footer() {
  let contentDisplay = false;
  let extraMenu = false;

  function BooleanSwitch(idx) {
    contentDisplay = idx === 2 ? false : true;
    extraMenu = idx === 1 || idx === 2 ? true : false;
  }

  return (
    <footer id="footer">
      <div className="center grid footer-container">
        {footerData.map((data, idx) => {
          BooleanSwitch(idx);

          const { title, menu_1, menu_2, menu_3, menu_4, menu_5 } = data;

          return (
            <Fragment key={idx}>
              {contentDisplay ? (
                <ul className="flex footer-menu">
                  <li>{title}</li>
                  <li>{menu_1}</li>
                  <li>{menu_2}</li>
                  <li>{menu_3}</li>
                  <li>{menu_4}</li>
                  {extraMenu && <li>{menu_5}</li>}
                </ul>
              ) : (
                <Select data={data} />
              )}
            </Fragment>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
