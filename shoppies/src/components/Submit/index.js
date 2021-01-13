import "./style.css";
import { IoMdClose } from "react-icons/io";

function Submit(props) {
  return (
    <div
      className="
    submit-popup"
      style={{
        transform: props.show ? "scale(1)" : "scale(0)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div className="close-icon" onClick={props.onCloseSubmit}>
        <IoMdClose />
      </div>
      <div className="submit-text">Thank you for your submission!</div>
    </div>
  );
}

export default Submit;
