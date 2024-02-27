const fourthCardData_1 = [
  {
    li_span: 9.9,
    li: "Building Responsive",
  },
  {
    li_span: 8.9,
    li: "Cool",
  },
  {
    li_span: 8.9,
    li: "Docs",
  },
];
const fourthCardData_2 = ["Documentation", "Easy Use", "Out Of Box"];

function FourthCard({ loading }) {
  return (
    <div
      className={`fourth_conditinal ${
        loading ? "skeleton_fourth_conditional" : ""
      }`}
    >
      <ul
        className={`highlights-fourth ${
          loading ? "highlights-fourth-skeleton" : ""
        }`}
      >
        {fourthCardData_1.map((data, idx) => (
          <li key={idx}>
            <span>{data.li_span}</span> {data.li}
          </li>
        ))}
      </ul>
      <p>Why we love it</p>
      <ul
        className={`highlights-checked ${
          loading ? "highlights-checked-skeleton" : ""
        }`}
      >
        {fourthCardData_2.map((data, idx) => (
          <li key={idx}>
            <span>
              <i className="fa-solid fa-check"></i>
            </span>
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FourthCard;
