import computer from "../../assets/img/computer1.png";

function GridImg_1({ idx }) {
  return (
    <figure className="grid-1">
      <img src={computer} alt="Computer" />
      <figcaption>{`${idx === 3 ? "CDK" : "Builder"} ${
        idx === 1 ? "" : idx === 3 ? "" : "1"
      }`}</figcaption>
    </figure>
  );
}

export default GridImg_1;
