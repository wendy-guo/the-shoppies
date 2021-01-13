import "./style.css";
import { IoMdClose } from "react-icons/io";

function Banner(props) {
  return (
    <div
      className="banner"
      style={{
        transform: props.show ? "translateY(0px)" : "translateY(60px)",
      }}
    >
      <div className="close-btn" onClick={props.onClose}>
        <IoMdClose />
      </div>
      <div>You have nominated 5 movies!</div>
      <div className="sub-btn">submit</div>
    </div>
  );
}

export default Banner;
