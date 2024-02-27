import CardFlexImg from "./CardFlexImg";
import CardFlexInfo from "./CardFlexInfo";
import CardFlexBtn from "./CardFlexBtn";

function CardDealFlex({ dealCardData, loading }) {
  return (
    <>
      {dealCardData.map((data, idx) => {
        return (
          <div key={idx} className="flex center deal-card-flex">
            <CardFlexImg loading={loading} />
            <CardFlexInfo data={data} loading={loading} />
            <CardFlexBtn loading={loading} />
          </div>
        );
      })}
    </>
  );
}

export default CardDealFlex;
