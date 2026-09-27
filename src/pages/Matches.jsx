import { Link } from "react-router-dom";

function MatchCard({ team1, team2, venue, date }) {
  return (
    <div className="match-card">
      <h2>
        {team1} vs {team2}
      </h2>

      <p>📍 {venue}</p>
      <p>📅 {date}</p>

      <Link to="/booking">
        <button>Book Ticket</button>
      </Link>
    </div>
  );
}

function Matches() {
  return (
    <main className="matches-page">
      <h1>Upcoming IPL Matches</h1>

      <div className="matches-grid">

        <MatchCard
          team1="RCB"
          team2="CSK"
          venue="M. Chinnaswamy Stadium, Bengaluru"
          date="25 March 2026"
        />

        <MatchCard
          team1="MI"
          team2="KKR"
          venue="Wankhede Stadium, Mumbai"
          date="28 March 2026"
        />

        <MatchCard
          team1="SRH"
          team2="GT"
          venue="Rajiv Gandhi International Stadium, Hyderabad"
          date="30 March 2026"
        />

        <MatchCard
          team1="DC"
          team2="RR"
          venue="Arun Jaitley Stadium, Delhi"
          date="2 April 2026"
        />

      </div>
    </main>
  );
}

export default Matches;