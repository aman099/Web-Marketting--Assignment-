import "./Card.scss";

import CardGrid from "./CardGrid";

const mainCardData = [
  {
    // figCaption: "Builder",
    strong: "WixPro 72-Inch Responsive Website Builder",
    p1: "- Comprensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    p2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating_h2: "9.8",
    rating_p: "Exceptional",
  },
  {
    // figCaption: "Builder",
    strong: "SiteCraft 68-Inch Ultimate Web Design Studio",
    p1: "- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    p2: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating_h2: "9.5",
    rating_p: "Excellent",
  },
  {
    // figCaption: "Builder",
    strong: "WixPro 72-Inch Responsive Website Builder",
    p1: "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    p2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating_h2: "9.3",
    rating_p: "Exceptional",
  },
  {
    // figCaption: "Builder",
    strong: "CDK Responsive Builder:",
    p1: " An extensive library of widgets and apps, and detailed step-by-step guides",
    p2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating_h2: "9.1",
    rating_p: "Very Good",
  },
];

function Card() {
  return (
    <article id="main-card center">
      {/* <div className="grid center main-card-grid"> */}
      <>
        <CardGrid mainCardData={mainCardData} />
      </>
      {/* </div> */}
    </article>
  );
}

export default Card;
