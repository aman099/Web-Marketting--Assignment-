import Button from "./Button";
import FourthCard from "./FourthCard";

function GridInfo({ idx, data }) {
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
}

export default GridInfo;
