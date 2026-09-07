import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  // Toy state lives here (the closest common ancestor of ToyForm and
  // ToyContainer) so that a toy created in the form can be added to the
  // same list that ToyContainer renders.
  const [toys, setToys] = useState([]);

  // When the app first loads, fetch all toys from the backend
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((toysFromServer) => setToys(toysFromServer));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // When a toy is created via the form, add it to state
  function onAddNewToy(newToy) {
    setToys((toys) => [...toys, newToy]);
  }

  // When a toy's likes are updated, replace that toy in state
  // (using .map keeps the toys in their original order)
  function onUpdateToy(updatedToy) {
    setToys((toys) =>
      toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  // When a toy is donated (deleted), remove it from state
  function onDeleteToy(deletedToyId) {
    setToys((toys) => toys.filter((toy) => toy.id !== deletedToyId));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={onAddNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onUpdateToy={onUpdateToy}
        onDeleteToy={onDeleteToy}
      />
    </>
  );
}

export default App;
