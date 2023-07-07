import { useState, useEffect, useId, useCallback } from "react";

const initialUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
];

// How do i fetch API(https://jsonplaceholder.typicode.com/users)
// and show users

// const API = "https://jsonplaceholder.typicode.google.com/users";
const API = "https://jsonplaceholder.typicode.com/users";

const FunctionalComponent = () => {
  // useEffect(callback, return, dependencies)

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mediaSize, setMediaSize] = useState(1200);

  useEffect(() => {
    setIsLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data);
          setIsLoading(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  }, [API]);

  //   useEffect(() => {
  // const timer = setInterval(() => {
  //   console.log("timer");
  // }, 1000);
  // return () => {
  //   clearInterval(timer);
  // };
  //   }, []);

  useEffect(() => {
    let screenSize = window.innerWidth;
    setMediaSize(screenSize);
  }, [mediaSize]);

  // logic if mediaSize < 650

  const id = useId();

  //   very expensive task
  const count = useCallback(() => {
    // count to million
  });

  console.log(isLoading);
  return (
    <div>
      <hr />
      <h1>Functional Component</h1>
      {!isLoading ? (
        users.map((user, idx) => (
          <p key={idx}>
            {user.name} - {user.email}
          </p>
        ))
      ) : (
        <h3>Loading users ...</h3>
      )}
    </div>
  );
};

export default FunctionalComponent;

// Hooks
// - useState(to create a state and update its value)
// - useEffect (lets you synchronize a component with an external system)
