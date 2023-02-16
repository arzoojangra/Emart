import React, { Component, useEffect, useState } from "react";

function CondRender(props) {
  const [showList, setShowList] = useState(true);
  const [loading, setLoading] = useState(true);

  const listItems = ["Tucker", "Todd", "Lucy", "Gator"];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      23 January 2023
      <br />
      <br />
      Conditional rendering
      <br />
      <br />
      Showing list items:
      <br />
      {/* {showList ? (
        <div>
          {listItems.map((item, index) => (
            <ul>
              <li key={index}>{item}</li>
            </ul>
          ))}
        </div>
      ) : null} */}
      {/* using null */}
      {/* {showList ? (
        <div>
          {listItems.map((item, index) => (
            <ul>
              <li key={index}>{item}</li>
            </ul>
          ))}
        </div>
      ) : (
        ""
      )} */}
      {/* using empty string */}
      {showList && (
        <div>
          {listItems.map((item, index) => (
            <ul>
              <li key={index}>{item}</li>
            </ul>
          ))}
        </div>
      )}
      {/* using && */}
      <button onClick={() => setShowList(!showList)}>Toggle List</button>
    </div>
  );
}

export default CondRender;
