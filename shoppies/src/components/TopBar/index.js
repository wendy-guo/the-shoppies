import "./style.css";
import { FaAward as Award } from "react-icons/fa";

function TopBar(props) {
  return (
    <div className="top-bar">
      <div className="logo">
        THE <br />
        SHOPPIES
      </div>
      <div className="nomis">
        <span className="nomis-btn" onClick={props.onNomClick}>
          <Award size={30} />
          <span style={{ marginLeft: "5px" }}>nominations</span>
        </span>
      </div>
    </div>
  );
}

export default TopBar;
