import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeam} = props

  const {id, teamImageUrl, name} = eachTeam

  return (
    <li className="each-team-card-container">
      <Link to={`/team-matches/${id}`} className="link-component">
        <div className="each-team-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="each-team-heading"> {name} </p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
