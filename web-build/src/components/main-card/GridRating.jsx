import Star from "./Star";
import Button from "./Button";

function GridRating({ idx, data, loading }) {
  const { rating_h2, rating_p } = data;

  return (
    <div
      className={`grid-3 grid-3-rating ${loading ? "gridRatingSkeleton" : ""}`}
    >
      <div className="rating flex">
        <h2>{rating_h2}</h2>
        <p>{rating_p}</p>
        <Star data={data} />
      </div>
      <Button
        classNameBtn={`btn btn-view ${loading ? "btnRatingSkeleton" : ""}`}
        classNameContainer={`btn-blue ${idx === 3 ? "matop" : ""}`}
      >
        View
      </Button>
    </div>
  );
}

export default GridRating;
