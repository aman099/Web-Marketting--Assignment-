import GridImg_1 from "./GridImg_1";
import GridInfo_2 from "./GridInfo_2";
import GridRating_3 from "./GridRating_3";

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
            <GridImg_1 idx={idx} />
            <GridInfo_2 idx={idx} data={data} />
            <GridRating_3 idx={idx} data={data} />
          </div>
        );
      })}
    </>
  );
}

export default CardGrid;
