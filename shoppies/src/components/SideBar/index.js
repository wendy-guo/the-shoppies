import "./style.css";

function SideBar(props) {
  return (
    <div
      className="side-bar"
      style={{ transform: props.open ? "translateX(0px)" : "translateX(100%)" }}
    >
      <div className="sb-heading">
        <div>nominations {props.numNom}/5</div>
        <div className="sb-close" onClick={props.onClose}>
          {"->"}
        </div>
      </div>
      <div>
        {props.nominations.map((nom, i) => (
          <Nomination
            title="Harry Potter and the Philosopher's Stone"
            even={i % 2 === 0}
          />
        ))}
      </div>
      <div className="submit-btn">
        <div className="submit-shadow">huh</div>
        <div className={props.numNom === 5 ? "submit" : "no-submit"}>
          submit
        </div>
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
      <div
        className="nom-title"
        style={{ textAlign: props.even ? "left" : "right" }}
      >
        {props.title}
      </div>
    </div>
  );
}

export default SideBar;
