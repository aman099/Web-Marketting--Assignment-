import Button from "../main-card/Button";

function CardFlexBtn({ loading }) {
  return (
    <div className="flex-3">
      <Button
        classNameBtn={`btn btn-view ${loading ? "skeletonBtnFlex" : ""}`}
        classNameContainer={`btn-blue mtop-20 ${
          loading ? "skeletonBtnFlexCont" : ""
        }`}
      >
        View
      </Button>
    </div>
  );
}

export default CardFlexBtn;
