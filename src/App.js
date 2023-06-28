import "./App.css";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ClassComponent from "./ClassComponent";
import TestComponent from "./TestComponent";

function App() {
  const person = {
    name: "Rami",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };
  return (
    <div>
      <Header myPerson={person} headerText={"Header"} />
      <Content />
      <Content contentText={"Content 2"} />
      <Content contentText={"Content 3"} />
      <Content contentText={"Content 4"} />
      <TestComponent>
        <div>
          <h1>This text is coming as a children 1</h1>
          <p>This text is coming as a children 2</p>
        </div>
      </TestComponent>
      <ClassComponent text={"Hello from Class Component"} />
      <Footer />
    </div>
  );
}

// index.js <- export, import -> header.js
// index.html <-> header.html

// function App() {
// document.getElementById("div").innerHTML = "Hello";
// example JSX
// const myHeader = <h1>React Tutorial</h1>;
// return (
//   <React.Fragment>
//     <h1>Welcome</h1>
//     {myHeader}
//     <p>This is text</p>
//   </React.Fragment>
// );
// }

export default App;
