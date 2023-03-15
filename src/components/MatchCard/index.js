import './index.css'

const MatchCard = props => {
  const {eachRecentMatch} = props

  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = eachRecentMatch

  const matchStatusColor = matchStatus === 'Lost' ? 'lost-color' : 'won-color'

  return (
    <li className="match-card">
      <div className="card-inner-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competing-team-logo"
        />
        <p className="text text-size"> {competingTeam}</p>
        <p className="text para-text"> {result}</p>
        <p className={`${matchStatusColor} text`}> {matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
