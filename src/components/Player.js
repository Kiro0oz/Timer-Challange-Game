import { useState, useRef } from "react";
export default function Player() {
  const palyerName = useRef();
  const [name, setName] = useState("");

  function handleClick() {
    setName(palyerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={palyerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
