import React from "react";
import Header from "./Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Pit from "./Pit";
import Home from "./Home.js";
import Teams from "./Teams.js";
import Main from "./Stats.js";
import TeamStats from "./TeamStats.js";
import Scouting from "./Scouting.js";
import AddMatch from "./AddMatch.js";
import Games from "./Games.js";
import MatchTypeSelector from "./RegisterM_HHeader";
import AddTeam_HHeader from "./AddTeam_HHeader.js";
import EditTeam from "./EditTeam.js";
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
              <Header name="Teams" />
              <Teams />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/pitStats"
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
