import "./SubHeading.scss";
import { Fragment } from "react";

import right_arr from "../../assets/img/right-vector-arrow.png";

const materials = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "BlueHosting",
];
const materials2 = [
  "Home",
  "Hosting for all",
  "Hosting",
  "Hosting6",
  "Hosting5",
];

function SubHeading() {
  let rightArrDisplay = true;

  function arrDisplay(idx) {
    rightArrDisplay = idx === 4 ? false : true;
  }

  return (
    <div className="sub-heading center">
      <ul className="flex p-left m-top-bot mat-1">
        {materials.map((material, idx) => {
          return (
            <Fragment key={idx}>
              <li>{material}</li>
            </Fragment>
          );
        })}
      </ul>
      <ul className="flex p-left m-top-bot mat-2">
        {materials2.map((material2, idx) => {
          arrDisplay(idx);
          return (
            <Fragment key={idx}>
              <li>{material2}</li>
              {rightArrDisplay && (
                <img className="right-arr" src={right_arr} alt="right-arrow" />
              )}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default SubHeading;
