import React, { useEffect, useState } from "react";

function MainWebsite(props) {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subt = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount((count) => 0);
  };

  return (
    <div className="middle">
      <p>main column using functional component</p>

      <br />

      <p>{count}</p>

      <button onClick={() => add()}>Inrease</button>
      <button onClick={() => subt()}>Decrease</button>
      <button onClick={() => reset()}>Reset</button>

      <br />
      <br />
      <br />
    </div>
  );
}

export default MainWebsite;
