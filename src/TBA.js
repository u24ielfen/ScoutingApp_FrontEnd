const Gson = require("com.google.gson.Gson");
const TBA = require("com.thebluealliance.api.v3.TBA");
const Match = require("com.thebluealliance.api.v3.models.Match");
const Team = require("com.thebluealliance.api.v3.models.Team");

function TBA() {
  const gson = new Gson();
  const tba = new TBA("FRCScouting", "1.0.0", "FRCScouting");
  const match = new Match();
  const team = new Team();

  const team1 = team.getTeamNumber();
  const team2 = team.getTeamNumber();
  // ... continue with other team numbers

  const match1 = match.getMatchNumber();
  const match2 = match.getMatchNumber();
  // ... continue with other match numbers
}
