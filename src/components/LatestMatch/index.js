import './index.css'

const LatestMatch = props => {
  const {latestMatchDetailsList} = props

  const {
    umpires,
    result,
    id,
    date,
    matchStatus,
    firstInnings,
    secondInnings,
    competingTeam,
    competingTeamLogo,
    venue,
    manOfTheMatch,
  } = latestMatchDetailsList
  return (
    <div>
      <p> Latest matches</p>
      <div className="latest-match-card">
        <div className="team-detail-container">
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img src={competingTeamLogo} alt="logo" className="team-logo" />
        <div className="team-stat-container">
          <p>firstInnings</p>
          <p>{firstInnings}</p>
          <p>SecondInnings </p>
          <p> {secondInnings}</p>
          <p>Man Of The Match </p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
