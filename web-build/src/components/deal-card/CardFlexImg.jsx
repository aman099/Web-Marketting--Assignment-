import Computer from "../../assets/img/computer1.png";

import CardFlexImgSkeleton from "./deal-card-skeleton/CardFlexImgSkeleton";

function CardFlexImg({ loading }) {
  return (
    <>
      {loading ? (
        <CardFlexImgSkeleton />
      ) : (
        <div className="flex-1">
          <img src={Computer} alt="Computer" />
        </div>
      )}
    </>
  );
}

export default CardFlexImg;
