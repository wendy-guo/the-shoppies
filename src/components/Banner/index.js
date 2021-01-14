import "./style.css";

function Banner(props) {
  return (
    <div
      className="banner"
      style={{
        transform: props.show ? "translateY(0px)" : "translateY(60px)",
      }}
    >
      <div>You have nominated 5 movies!</div>
      <div className="sub-btn" onClick={props.onSubmit}>
        submit
      </div>
    </div>
  );
}

export default Banner;
