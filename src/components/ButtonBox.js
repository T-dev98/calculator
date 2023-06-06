// imports the CSS styles from the "ButtonBox.css" file.
import "./ButtonBox.css";

// The ButtonBox component is a functional component that takes a single prop, children.
const ButtonBox = ({ children }) => {
  // returns div element with the class name "buttonBox" and the children prop as its content. 
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;