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
import MatchTypeSelector from "./Matches/RegisterM_HHeader.js";
import AddTeam_HHeader from "./Components/AddTeam_HHeader.js";
import EditTeam from "./Teams/EditTeam.js";
import Users from "./Users.js";
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
              <Header name="Team" />
              <Teams />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/averageStats"
          element={
            <>
              <Header name="Team Statistics" />
              <Main />
              <Footer />
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
              <Header />
              <TeamStats />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/games/team/:id"
          element={
            <>
              <Header />
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
              <EditTeam />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/registermatch"
          element={
            <>
              <Header name="Match Scouting" />
              <MatchTypeSelector active="register" />
              <AddMatch />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <>
              <Header /> <Users /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/addteamtoMatch"
          element={
            <>
              <Header name="Match Info" />
              <AddTeam_HHeader />
              <Scouting />
              <Footer />
            </>
          }
        />

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
