import "./Wrapper.css"; // imports the CSS styles from the "Wrapper.css" file.

//The Wrapper component is a functional component that takes a single prop, children.
const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;