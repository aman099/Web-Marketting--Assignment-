import Button from "./Button";
import FourthCard from "./FourthCard";

function GridInfo({ idx, data, loading }) {
  const { strong, p1, p2 } = data;

  return (
    <div className={`grid-2 ${loading ? "gridInfoSkeleton" : ""}`}>
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
          <h5 className={`${loading ? "skeletonMainHighlights" : ""}`}>
            Main highlights
          </h5>
          {idx === 3 ? <FourthCard loading={loading} /> : <p>{p2}</p>}
        </div>
        <Button
          classNameBtn={`show-more-btn flex ${
            loading ? "show-more-btn-skeleton" : ""
          }`}
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
}

export default GridInfo;
