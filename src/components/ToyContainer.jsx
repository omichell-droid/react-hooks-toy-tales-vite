import React from "react";
import ToyCard from "./ToyCard";

// ToyContainer doesn't hold its own state — it receives the list of toys
// (and the handlers a ToyCard needs) as props from App, and maps over
// them to render one ToyCard per toy.
function ToyContainer({ toys, onUpdateToy, onDeleteToy }) {
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onUpdateToy={onUpdateToy}
      onDeleteToy={onDeleteToy}
    />
  ));

  return <div id="toy-collection">{toyCards}</div>;
}

export default ToyContainer;
