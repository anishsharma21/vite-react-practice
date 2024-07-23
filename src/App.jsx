import { useState } from "react";
import Counter from "./Counter";
import Food from "./Food";
import Profile from "./Profile";
import profilePicture from "./assets/avatar.jpg";

function App() {
  const user = {
    name: "Anish Sharma",
    profilePicture,
  };

  const product = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];

  const [count, setCount] = useState(0);

  let handleClick = () => setCount(count + 1);

  return (
    <>
      <h1>Welcome to my app</h1>
      <Profile user={user} />
      <Food food={product} />
      <Counter count={count} onClick={handleClick} />
      <Counter count={count} onClick={handleClick} />
    </>
  );
}

export default App;
