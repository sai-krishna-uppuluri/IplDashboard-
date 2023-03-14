// import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
  }

  getMatchDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const {team_banner_url: teamBannerUrl} = data

    this.setState({
      teamBannerUrl,
    })
  }

  componentDidMount = () => {
    this.getMatchDetails()
  }

  render() {
    const {teamBannerUrl} = this.state
    const {match} = this.props
    const {id} = match
    return (
      <Link to={`/ipl/${id}`}>
        <div className="ipl-bg-container">
          <div className="ipl-bg-inside-container">
            <img src={teamBannerUrl} alt="banner" className="banner-image" />
            <LatestMatch key={id} />
          </div>
        </div>
      </Link>
    )
  }
}

export default TeamMatches
