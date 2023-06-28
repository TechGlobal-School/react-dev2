import "./Header.css";

const Header = (props) => {
  //   const css = {
  //     color: "red",
  //     display: "flex",
  //     alignItems: "baseline",
  //     justifyContent: "space-between",
  //   };
  // return jsx

  console.log(props);
  const { myPerson, headerText } = props;

  return (
    <header
    //   style={{
    //     color: "red",
    //     display: "flex",
    //     alignItems: "baseline",
    //     justifyContent: "space-between",
    //   }}
    //   style={css}
    >
      <h1>{headerText}</h1>
      <p>Welcome {myPerson.name}</p>
      {/* <p>Welcome {person.name}</p> */}
    </header>
  );
};

export default Header;
