import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../../utils/api";
import BreadCrumbs from "./BreadCrumbs";
import "./ViewDeck.css";

const ViewDeck = () => {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();
  const history = useHistory();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      const response = await readDeck(deckId);
      setDeck(response);
      setCards(response.cards);
    }
    loadDecks();
  }, [deckId]);

  const handleDelete = (deckId) => {
    const confirmDelete = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );

    if (confirmDelete) {
      deleteDeck(deckId);
      history.push("/");
    }
  };
  const handleCardDelete = (cardId) => {
    const confirmDelete = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it."
    );

    if (confirmDelete) {
      deleteCard(cardId);
      history.go();
    }
  };

  return (
    <div>
      <BreadCrumbs
        crumbs={[{ label: "Home", link: "/" }, { label: deck.name }]}
      />
      <div className="mb=3">
        <div>
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
          <div className="view-deck-btns">
            <div>
              <Link to={`/decks/${deck.id}/edit`}>
                <button className="btn btn-secondary">
                  <i class="bi bi-pencil-fill"></i> Edit
                </button>
              </Link>
              <Link to={`/decks/${deck.id}/study`}>
                <button className="btn btn-primary">
                  <i class="bi bi-journal-bookmark"></i> Study
                </button>
              </Link>
              <Link to={`/decks/${deck.id}/cards/new`}>
                <button className="btn btn-primary add-cards">
                  <i class="bi bi-plus-lg"></i> Add Cards
                </button>
              </Link>
            </div>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(deck.id)}
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="cards-header">Cards</h2>
      <div className="cards-list">
        {cards.map((card, index) => (
          <div key={index} className="card-view">
            <div className="card-front">{card.front}</div>
            <div className="card-edit-delete">
              <div>{card.back}</div>
              <div className="edit-delete">
                <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
                  <button className="btn btn-secondary">
                    <i class="bi bi-pencil-fill"></i> Edit
                  </button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCardDelete(card.id)}
                >
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDeck;
