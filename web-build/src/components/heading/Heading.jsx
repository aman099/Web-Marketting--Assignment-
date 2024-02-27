import { useState } from "react";
import "./Heading.scss";

const menuData = ["Top Relevant", "Top Newest", "Top Oldest", "Top year ago"];

function Heading({ loading, menuCatcherID }) {
  const [switchedOption, setSwitchedOption] = useState("");

  function dataClick(idx, data) {
    setSwitchedOption(data);
    console.log(switchedOption);
    menuCatcherID(idx);
  }

  return (
    <div className={`heading center ${loading ? "headingSkeleton" : ""}`}>
      <h2>Best Website builders in the US</h2>
      <hr />
      <div className="date">
        <div className="left">
          <ul className="flex m-top-bot date-left">
            <li>
              <span>
                <i className="fa-solid fa-check"></i>
              </span>
              <span>Last Updated</span>
              &nbsp;-&nbsp;
            </li>
            <li>February 22, 2020</li>
            <li>
              <span>
                <i className="fa-solid fa-info"></i>
              </span>
              <span>Advertising Disclosure</span>
            </li>
          </ul>
        </div>
        <div className="right">
          <span>{switchedOption || "Top Relevant"}</span>
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
          <div className="drop-down absolute-dropDown">
            <ul>
              {menuData.map((data, idx) => (
                <li key={idx} onClick={(e) => dataClick(idx, data)}>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Heading;
