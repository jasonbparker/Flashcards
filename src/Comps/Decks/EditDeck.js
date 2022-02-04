import React, { useEffect, useState } from "react";
import DeckForm from "./DeckForm";
import { readDeck, updateDeck } from "../../utils/api";
import { useParams, useHistory, Link } from "react-router-dom";

// allows user to edit a specified deck using the deckForm component

const EditDeck = () => {
  const [deck, setDeck] = useState({ card: [] });
  const { deckId } = useParams();
  const history = useHistory();

  const handleSubmit = (deck) => {
    updateDeck(deck).then((res) => history.push(`/decks/${res.id}`));
  };

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bi bi-house-door-fill"></i> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>

      <h1>Edit Deck</h1>

      {deck.id && (
        <DeckForm handleSubmit={handleSubmit} deck={deck} setDeck={setDeck} />
      )}
    </div>
  );
};

export default EditDeck;
