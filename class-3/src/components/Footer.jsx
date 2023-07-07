const Footer = (props) => {
  // console.log("props", props);
  const { isLightBg } = props;
  const style = {
    backgroundColor: isLightBg ? "lightgray" : "orangered",
    padding: "25px",
  };
  // tons of logic, calculations presentation
  return (
    <footer style={style}>
      <h1 style={{ margin: 0 }}>Footer</h1>
    </footer>
  );
};

export default Footer;
