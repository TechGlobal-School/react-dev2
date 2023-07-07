// Component is just a function that return JSX
import logo from "../logo.svg";

const Hero = ({ lightTheme, onLogoClick }) => {
  // console.log("lightTheme", lightTheme);
  const title = "Welcome to my React Page";

  return (
    <header
      onClick={onLogoClick}
      className="App-header"
      style={
        lightTheme
          ? { background: "lightcyan", color: "#000" }
          : { background: "#282c34" }
      }
    >
      <img src={logo} className="App-logo" alt="logo" />
      <p>{title}</p>
    </header>
  );
};

export default Hero;
