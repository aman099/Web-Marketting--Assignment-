import CardFlexImg_1 from "./CardFlexImg_1";
import CardFlexInfo_2 from "./CardFlexInfo_2";
import CardFlexBtn_3 from "./CardFlexBtn_3";

function CardDealFlex({ dealCardData }) {
  return (
    <>
      {dealCardData.map((data, idx) => {
        return (
          <div key={idx} className="flex center deal-card-flex">
            <CardFlexImg_1 />
            <CardFlexInfo_2 data={data} />
            <CardFlexBtn_3 />
          </div>
        );
      })}
      {/* <div className="flex center deal-card-flex">
        <div className="flex-1">
          <img src={Computer} alt="Computer" />
        </div>
        <div className="flex-2">
          <div className="info">
            <p className="discount">
              <span>25% Off</span>
              <span>Limited Time</span>
            </p>
            <p>Webbuilder 1</p>
            <p>Computer Modern classic with wix support</p>
            <div className="price-tag">
              <span>$39.96</span>
              <span>$49.96</span>
              <span>(20% Off)</span>
            </div>
          </div>
        </div>
        <div className="flex-3">
          <Button classNameBtn="btn btn-view" classNameContainer="btn-blue">
            View
          </Button>
        </div>
      </div> */}
    </>
  );
}

export default CardDealFlex;
