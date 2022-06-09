import React from "react";

import { useParams } from "react-router-dom";

export default function GreetingCat(props) {
  let { greeting } = useParams();
  console.log("Data", greeting);
  //   const { greeting } = props.match.params;
  const greetingCatUrl = `https://cataas.com/cat/says/${greeting}`;

  return (
    <div>
      <header>
        <h3>Greet me</h3>
        {!greeting ? (
          <div>Needs a greeting</div>
        ) : (
          <div>
            <img src={greetingCatUrl} width="400px" alt="Cat" />
          </div>
        )}
      </header>
    </div>
  );
}
