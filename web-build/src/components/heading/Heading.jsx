import "./Heading.scss";

function Heading({ loading }) {
  return (
    <div className={`heading center ${loading ? "headingSkeleton" : ""}`}>
      <h2>Best Website builders in the US</h2>
      <hr />
      <div className="date">
        <div className="left">
          <ul className="flex m-top-bot date-left">
            <li>
              <span>
                <i className="fa-solid fa-check"></i>
              </span>
              <span>Last Updated</span>
              &nbsp;-&nbsp;
            </li>
            <li>February 22, 2020</li>
            <li>
              <span>
                <i className="fa-solid fa-info"></i>
              </span>
              <span>Advertising Disclosure</span>
            </li>
          </ul>
        </div>
        <div className="right">
          <span>Top Relevant</span>
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Heading;
