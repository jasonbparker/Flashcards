import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckHome from "../Comps/DeckHome";
import CreateDeck from "../Comps/Decks/CreateDeck";
import StudyDeck from "../Comps/Decks/StudyDeck";
import ViewDeck from "../Comps/Decks/ViewDeck";
import EditDeck from "../Comps/Decks/EditDeck";
import AddCard from "../Comps/Cards/AddCard";
import EditCard from "../Comps/Cards/EditCard";
import { Route, Switch, Redirect } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckHome />
          </Route>

          <Route exact path="/decks">
            <Redirect to="/" />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            <ViewDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
