import "./style.css";

function DarkLayer(props) {
  return (
    <div
      className={props.show ? "layer dark-layer" : "layer"}
      onClick={props.onClick}
    ></div>
  );
}

export default DarkLayer;
