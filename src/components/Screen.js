//imports the Textfit component from the "react-textfit" library. to control screen size
import { Textfit } from "react-textfit";
import "./Screen.css"; //imports the CSS styles from the "Screen.css" file.

// The Screen component is a functional component that takes a single prop, value.
const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;