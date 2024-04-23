import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage/LandingPage";
import GamesPage from "./components/GamesPage/GamesPage";
import PitchVisualizerPage from "./components/PitchVisualizerPage/PitchVisualizerPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/games">
            <GamesPage />
          </Route>

          <Route exact path="/humzzz">
            <PitchVisualizerPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
