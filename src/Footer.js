const Footer = () => {
  const footerText = "Footer"; // i can't pass this to App Component

  // You can create functions inside component
  const modifyObj = (obj) => {
    // pure function
    // return obj;

    // not pure function
    obj.name = "Mike";
    return obj;
  };

  console.log(modifyObj({ name: "Joe" }));

  // Only JSX
  return (
    <footer>
      {
        // js code
        // console.log(modifyObj({ name: "Joe" })) // valid but makes no sense
      }
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;
