import "./style.css";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function SideBar(props) {
  return (
    <div
      className="side-bar"
      style={{ transform: props.open ? "translateX(0px)" : "translateX(100%)" }}
    >
      <div className="sb-heading">
        <div>nominations {props.nominations.length}/5</div>
        <div className="sb-close" onClick={props.onClose}>
          {"->"}
        </div>
      </div>
      <div>
        {props.nominations.map((nom, i) => (
          <Nomination key={i} nom={nom} onDelete={props.onUnnominate} />
        ))}
      </div>
      <div
        className="submit-btn"
        style={{ opacity: props.nominations.length === 5 ? "1" : "0" }}
      >
        <div className="submit-shadow">huh</div>
        <div className="submit">submit</div>
      </div>
    </div>
  );
}

function Nomination(props) {
  console.log(props.nom);
  return (
    <div className="sb-nom">
      {props.nom.Poster === "N/A" ? (
        <div className="nom-image"></div>
      ) : (
        <img src={props.nom.Poster} alt={props.nom.Title} />
      )}
      <div className="nom-title">
        <div>{props.nom.Title}</div>
        <RiDeleteBinFill
          className="garbage"
          onClick={() => props.onDelete(props.nom)}
        />
      </div>
    </div>
  );
}

export default SideBar;
