import "./style.css";

function SideBar(props) {
  return (
    <div className="side-bar">
      <div className="sb-heading">
        <div>nominations {props.numNom}/5</div>
        <div>{"->"}</div>
      </div>
      <div>
        {props.nominations.map((nom, i) => (
          <Nomination title="hello" even={i % 2 === 0} />
        ))}
      </div>
    </div>
  );
}

function Nomination(props) {
  return (
    <div
      className="sb-nom"
      style={{ flexDirection: props.even ? "row" : "row-reverse" }}
    >
      <div className="nom-image"></div>
      <div>{props.title}</div>
    </div>
  );
}

export default SideBar;
