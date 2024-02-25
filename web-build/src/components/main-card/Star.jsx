import React, { Fragment } from "react";

function Star({ data }) {
  const starArr = [1, 2, 3, 4, 5]; //Just to map over Individual star Icons
  const { rating_p } = data;

  let fullEmptyStar = false;
  let halfEmptyStar = false;

  let halfPrint = false;
  let fullPrint = false;

  function LastStarSwitch() {
    if (rating_p === "Exceptional"); //<i className="fa-solid fa-star"></i>
    if (rating_p === "Excellent") halfEmptyStar = true; //<i className="fa-solid fa-star-half-stroke"></i>
    if (rating_p === "Very Good") fullEmptyStar = true; //<i className="fa-regular fa-star"></i>
    // Prints the manipulated star
    if (halfEmptyStar) halfPrint = true;
    if (fullEmptyStar) fullPrint = true;
  }

  return (
    <div className="stars">
      <span>
        {starArr.map((star, starIdx) => {
          LastStarSwitch();
          return (
            <Fragment key={starIdx}>
              {starIdx === 4 ? (
                (halfPrint && (
                  <i className="fa-solid fa-star-half-stroke"></i>
                )) ||
                (fullPrint && <i className="fa-regular fa-star"></i>) || (
                  <i className="fa-solid fa-star"></i>
                )
              ) : (
                <i className="fa-solid fa-star"></i>
              )}
            </Fragment>
          );
        })}
      </span>
    </div>
  );
}

export default Star;
