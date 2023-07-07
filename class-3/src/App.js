import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState } from "react"; // hooks
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

// map -> returns an array

// async
// DOM

function App() {
  // const students = ["Bilal", "Yasser", "Rami", "Bilal"]; // try with null

  const user = {
    name: "Joe",
  };

  const users = [{ name: "Jane" }, { name: "Hasan" }];
  // let isLightBg = false; // try with true
  let [isLightBg, setIsLightBg] = useState(false);
  let [students, setStudents] = useState(["Bilal", "Yasser", "Rami", "Bilal"]);

  const [showClass, setShowClass] = useState(false);
  // let value = array[0] // state value
  // let updateValue = array[1] // method to update your state

  // Show students only if array is not empty
  // let studentsJSX;

  // if (students) {
  //   if (students.length <= 0) {
  //     studentsJSX = <p>No students</p>;
  //   } else {
  //     studentsJSX = students.map((student, idx) => (
  //       <p key={`${idx}-${student}`} id={idx}>
  //         {student} - delete
  //       </p>
  //     ));
  //   }
  // }

  const handleDelete = (index) => {
    // filter
    // you can't directly modify state
    let newStudents = students.filter(
      (student, idx) => idx !== index && student
    );
    // ask react to update the state
    //  never update directly
    // ex: students = students.filter((student, idx) => idx !== index && student);
    setStudents(newStudents);
  };

  const handleLogoClick = () => {
    console.log("logo clicked");
  };
  return (
    <div className="App">
      <Hero lightTheme={isLightBg} onLogoClick={handleLogoClick} />
      <button onClick={() => setIsLightBg(!isLightBg)}>Change Theme</button>
      <button onClick={() => setShowClass(!showClass)}>
        Show / Hide Class Component
      </button>
      <div
        style={
          isLightBg
            ? { background: "#fff", color: "black" }
            : { background: "black", color: "#fff" }
        }
      >
        {/* {students.map((student, idx) => (
        <p key={`${idx}-${student}`} id={idx}>
          {student} - delete
        </p>
      ))} */}
        {/* {students.length
        ? students.map((student, idx) => (
            <p key={`${idx}-${student}`} id={idx}>
              {student} - delete
            </p>
          ))
        : null} */}
        {students &&
          students.length &&
          students.map((student, idx) => (
            <p key={`${idx}-${student}`} id={idx}>
              {student}{" "}
              <button onClick={() => handleDelete(idx)}>Delete</button>
            </p>
          ))}
        <h1 onClick={(event) => console.log(event.target)}>Users</h1>
        <p>Single user object: {user.name}</p>
        <p>Array of objects:</p>
        <ul>
          {users.map((user, i) => {
            return <li key={i}>{user.name}</li>;
          })}
        </ul>
      </div>
      {showClass && <ClassComponent />}
      <FunctionalComponent />
      <Footer isLightBg={isLightBg} />
      {/* {
        isLigthEnabled ? <LighHeader/> : <DarkHeader/>
      } */}
    </div>
  );
}

export default App;

/*
Components
JSX
How to render Lists (and keys)
Conditional Rendering
state (useState hook) - is an object, is mutable and dynamic data inside component
props - incoming data to the component, you can pass any kind of variables  and also functions
Handling event (onClick event)

*/
