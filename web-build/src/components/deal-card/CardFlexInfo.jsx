function CardFlexInfo({ data }) {
  const {
    p_span_1,
    p_span_2,
    p_1,
    p_2,
    price_span_1,
    price_span_2,
    price_span_3,
  } = data;

  return (
    <div className="flex-2">
      <div className="info">
        <p className="flex discount">
          <span>{p_span_1}</span>
          <span>{p_span_2}</span>
        </p>
        <p>{p_1}</p>
        <p>{p_2}</p>
        <div className="flex price-tag">
          <span>{price_span_1}</span>
          <span>{price_span_2}</span>
          <span>{price_span_3}</span>
        </div>
      </div>
    </div>
  );
}

export default CardFlexInfo;
