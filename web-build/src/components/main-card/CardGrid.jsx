import GridImg from "./GridImg";
import GridInfo from "./GridInfo";
import GridRating from "./GridRating";

import IdNumber from "./IdNumber";
import ConditionalBestTag from "./ConditionalBestTag";

function CardGrid({ mainCardData, loading, selectedMenuID }) {
  let conditionalBestTag = "";

  function TagSwitcher(idx) {
    if (idx === 0 || idx === 1) conditionalBestTag = "";
    if (idx === 2 || idx === 3) conditionalBestTag = "none";
  }

  return (
    <>
      {mainCardData.map((data, idx) => {
        TagSwitcher(idx);
        return (
          <div
            className={`grid center main-card-grid ${
              selectedMenuID !== "" && selectedMenuID !== 0
                ? idx === selectedMenuID
                  ? ""
                  : "hidden"
                : ""
            }`}
            key={idx}
          >
            <ConditionalBestTag
              idx={idx}
              conditionalBestTag={conditionalBestTag}
              loading={loading}
            />
            <IdNumber idx={idx} loading={loading} />
            <GridImg idx={idx} loading={loading} />
            <GridInfo idx={idx} data={data} loading={loading} />
            <GridRating idx={idx} data={data} loading={loading} />
          </div>
        );
      })}
    </>
  );
}

export default CardGrid;
