import GridImg from "./GridImg";
import GridInfo from "./GridInfo";
import GridRating from "./GridRating";

import IdNumber from "./IdNumber";
import ConditionalBestTag from "./ConditionalBestTag";

function CardGrid({ mainCardData }) {
  let conditionalBestTag = "";

  function TagSwitcher(idx) {
    if (idx === 0 || idx === 1) conditionalBestTag = "";
    if (idx === 2 || idx === 3) conditionalBestTag = "none";
  }

  return (
    <>
      {mainCardData.map((data, idx) => {
        TagSwitcher(idx);
        // const { strong, p1, p2, rating_h2, rating_p } = data;
        return (
          <div className={`grid center main-card-grid`} key={idx}>
            <ConditionalBestTag
              idx={idx}
              conditionalBestTag={conditionalBestTag}
            />
            <IdNumber idx={idx} />
            <GridImg idx={idx} />
            <GridInfo idx={idx} data={data} />
            <GridRating idx={idx} data={data} />
          </div>
        );
      })}
    </>
  );
}

export default CardGrid;
