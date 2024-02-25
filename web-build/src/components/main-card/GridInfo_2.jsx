import Button from "./Button";
import FourthCard from "./FourthCard";

function GridInfo_2({ idx, data }) {
  const { strong, p1, p2 } = data;

  return (
    <div className="grid-2">
      <div className="info flex-info">
        <p>
          <strong>{strong}</strong>
          {p1}
        </p>
        <div className="highlights">
          {idx === 3 && (
            <p className="discount">
              <span>25% Off</span>
            </p>
          )}
          <h5>Main highlights</h5>
          {idx === 3 ? <FourthCard /> : <p>{p2}</p>}
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
  );
  // <div className="info flex-info">
  //   <p>
  //     <strong>WixPro 72-Inch Responsive Website Builder</strong>- Comprensive
  //     Digital Platform Creation Tool, Streamlined Design Interface for
  //     Professional Websites and Online Stores (Black/Blue)
  //   </p>
  //   <div className="highlights">
  //     <h5>Main highlights</h5>
  //     <p>
  //       [What You Get]: Receive the WixPro website builder suite, access to
  //       premium design templates, an extensive library of widgets and apps,
  //       and detailed step-by-step guides.
  //     </p>
  //   </div>
  //   <Button classNameBtn="" classNameContainer="show-more">
  //     Show more
  //     <span>
  //       <i className="fa-solid fa-chevron-down"></i>
  //     </span>
  //   </Button>
  // </div>
}

export default GridInfo_2;
