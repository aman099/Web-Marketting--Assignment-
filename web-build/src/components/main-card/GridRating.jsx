import Star from "./Star";
import Button from "./Button";

function GridRating({ idx, data }) {
  const { rating_h2, rating_p } = data;

  return (
    <div className="grid-3 grid-3-rating">
      <div className="rating flex">
        <h2>{rating_h2}</h2>
        <p>{rating_p}</p>
        <Star data={data} />
      </div>
      <Button
        classNameBtn="btn btn-view"
        classNameContainer={`btn-blue ${idx === 3 ? "matop" : ""}`}
      >
        View
      </Button>
    </div>
  );
}

export default GridRating;
