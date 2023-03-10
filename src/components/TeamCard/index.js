import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeam} = props

  const {id, teamImageUrl, name} = eachTeam

  return (
    <li className="each-team-card-container">
      <Link to={`/ipl/${id}`}>
        <div className="each-team-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <h1 className="each-team-heading"> {name} </h1>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
