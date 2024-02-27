import "./CardDeal.scss";

import CardDealFlex from "./CardDealFlex";

const dealCardData = [
  {
    p_span_1: "25% Off",
    p_span_2: "Limited Time",
    p_1: "Webbuilder 1",
    p_2: "Computer Modern classic with wix support",
    price_span_1: "$39.96",
    price_span_2: "$49.96",
    price_span_3: "(20% Off)",
  },
  {
    p_span_1: "25% Off",
    p_span_2: "Limited Time",
    p_1: "Webbuilder 1",
    p_2: "Computer Modern classic with wix support",
    price_span_1: "$39.96",
    price_span_2: "$49.96",
    price_span_3: "(20% Off)",
  },
  {
    p_span_1: "25% Off",
    p_span_2: "Limited Time",
    p_1: "Webbuilder 1",
    p_2: "Computer Modern classic with wix support",
    price_span_1: "$39.96",
    price_span_2: "$49.96",
    price_span_3: "(20% Off)",
  },
];

function CardDeal({ loading }) {
  return (
    <div
      className={`center card-deal-container ${
        loading ? "card-deal-container-skeleton" : ""
      }`}
    >
      <h3>Related deals you might like for</h3>
      <div className="grid card-deal">
        <CardDealFlex dealCardData={dealCardData} loading={loading} />
      </div>
    </div>
  );
}

export default CardDeal;
