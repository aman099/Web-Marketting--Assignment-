import { Fragment, useState } from "react";

// import computer from "../../assets/img/computer1.png";
import Button from "./Button";
import GridImg_1 from "./GridImg_1";
import GridInfo_2 from "./GridInfo_2";
import GridRating_3 from "./GridRating_3";
import Star from "./Star";
import FourthCard from "./FourthCard";
import IdNumber from "./IdNumber";
import ConditionalBestTag from "./ConditionalBestTag";

function CardGrid({ mainCardData }) {
  let conditionalBestTag = "";

  function TagSwitcher(idx) {
    if (idx === 0 || idx === 1) conditionalBestTag = "";
    if (idx === 2 || idx === 3) conditionalBestTag = "none";
  }

  return (
    <>
      {mainCardData.map((data, idx) => {
        TagSwitcher(idx);
        // const { strong, p1, p2, rating_h2, rating_p } = data;
        return (
          <div className={`grid center main-card-grid`} key={idx}>
            <ConditionalBestTag
              idx={idx}
              conditionalBestTag={conditionalBestTag}
            />
            <IdNumber idx={idx} />
            <GridImg_1 idx={idx} />
            <GridInfo_2 idx={idx} data={data} />
            <GridRating_3 idx={idx} data={data} />
          </div>
        );
      })}
    </>
  );
  //
  {
    /* <div className="grid-1">
        <img src={computer} alt="Computer" />
      </div>
      <div className="grid-2">
        <div className="info flex-info">
          <p>
            <strong>WixPro 72-Inch Responsive Website Builder</strong>-
            Comprensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <div className="highlights">
            <h5>Main highlights</h5>
            <p>
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
          </div>
          <Button
            classNameBtn="show-more-btn flex"
            classNameContainer="show-more"
          >
            Show more
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </Button>
        </div>
      </div>
      <div className="grid-3 grid-3-rating">
        <div className="rating flex">
          <h2>9.8</h2>
          <p>Exceptional</p>
          <Star />
        </div>
        <Button classNameBtn="btn btn-view" classNameContainer="btn-blue">
          View
        </Button>
      </div> */
  }
  // </div>
}

export default CardGrid;
