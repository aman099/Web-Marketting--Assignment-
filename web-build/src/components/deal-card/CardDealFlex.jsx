import CardFlexImg from "./CardFlexImg";
import CardFlexInfo from "./CardFlexInfo";
import CardFlexBtn from "./CardFlexBtn";

function CardDealFlex({ dealCardData }) {
  return (
    <>
      {dealCardData.map((data, idx) => {
        return (
          <div key={idx} className="flex center deal-card-flex">
            <CardFlexImg />
            <CardFlexInfo data={data} />
            <CardFlexBtn />
          </div>
        );
      })}
    </>
  );
}

export default CardDealFlex;
