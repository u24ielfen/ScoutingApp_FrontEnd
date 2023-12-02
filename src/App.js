import React from "react";
import Header from "./Components/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer.js";
import Pit from "./Pit";
import Home from "./Home.js";
import Teams from "./Teams/Teams.js";
import Main from "./Stats/Stats.js";
import TeamStats from "./Teams/TeamStats.js";
import Scouting from "./Matches/Scouting.js";
import AddMatch from "./Matches/AddMatch.js";
import Games from "./Matches/Games.js";
import MatchHeader from "./Matches/MatchHeader.js";
import EditTeam from "./Teams/EditTeam.js";
import Users from "./Users.js";
import Rank from "./Stats/Rank.js";
import Compare from "./Stats/Compare.js";
import StatsHeader from "./Stats/StatsHeader.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header name="Home" />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/teams"
          element={
            <>
              <Header name="Team" link="/" />
              <Teams />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/stats"
          element={
            <>
              <Header name="Team Statistics" />
              <StatsHeader type="stats" />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/rank"
          element={
            <>
              <Header name="Rank Teams"></Header>
              <StatsHeader type="rank" />
              <Rank></Rank>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/compare"
          element={
            <>
              <Header name="Compare Teams"></Header>
              <StatsHeader type="compare" />
              <Compare></Compare>
              <Footer></Footer>
            </>
          }
        ></Route>
        <Route
          path="/pitscouting"
          element={
            <>
              <Header name="Pre-Scouting" />
              <Pit />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/team/:id"
          element={
            <>
              <Header link="/teams" />
              <TeamStats />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/games/team/:id"
          element={
            <>
              <Header link="/games" />
              <TeamStats />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/editTeam/:id"
          element={
            <>
              <Header name="Edit Team" />
              <EditTeam link="/teams" />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/registermatch"
          element={
            <>
              <Header name="Match Scouting" />
              <MatchHeader type="register" />
              <AddMatch />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/addteamtoMatch"
          element={
            <>
              <Header name="Match Info" />
              <MatchHeader type="addTeam" />
              <Scouting />
              <Footer />
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <Header /> <Users /> <Footer />
            </>
          }
        ></Route>

        <Route
          path="/games"
          element={
            <>
              <Header name="Games" />
              <Games />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
