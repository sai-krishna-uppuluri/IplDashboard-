// import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetailsList: {},
    allRecentMatches: [],
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const {
      team_banner_url: teamBannerUrl,
      latest_match_details: latestMatchDetails,
      recent_matches: recentMatches,
    } = data

    const latestMatchDetailsUpdated = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      venue: latestMatchDetails.venue,
      date: latestMatchDetails.date,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const recentMatchesUpdated = recentMatches.map(eachRecentMatch => ({
      umpires: eachRecentMatch.umpires,
      venue: eachRecentMatch.venue,
      date: eachRecentMatch.date,
      result: eachRecentMatch.result,
      id: eachRecentMatch.id,
      manOfTheMatch: eachRecentMatch.man_of_the_match,
      competingTeam: eachRecentMatch.competing_team,
      competingTeamLogo: eachRecentMatch.competing_team_logo,
      firstInnings: eachRecentMatch.first_innings,
      secondInnings: eachRecentMatch.second_innings,
      matchStatus: eachRecentMatch.match_status,
    }))

    // console.log(latestMatchDetailsUpdated)
    // console.log(recentMatchesUpdated)

    this.setState({
      teamBannerUrl,
      latestMatchDetailsList: latestMatchDetailsUpdated,
      allRecentMatches: recentMatchesUpdated,
    })
  }

  componentDidMount = () => {
    this.getMatchDetails()
  }

  getBackgroundColor = teamId => {
    switch (teamId) {
      case 'mi':
        return 'bg-color-mi'
      case 'rcb':
        return 'bg-color-rcb'
      case 'csk':
        return 'bg-color-csk'
      case 'rr':
        return 'bg-color-rr'
      case 'kxp':
        return 'bg-color-pun'
      case 'sh':
        return 'bg-color-srh'
      case 'dc':
        return 'bg-color-dc'
      case 'kkr':
        return 'bg-color-kkr'
      default:
        return ''
    }
  }

  render() {
    const {teamBannerUrl, latestMatchDetailsList, allRecentMatches} = this.state
    const {match} = this.props
    const {params} = match
    //   const {id} = match
    //  const id = params?.id?.toLowerCase() || ''
    const {id} = params

    const teamId = id.toLowerCase()
    //  console.log('it is l', latestMatchDetailsList)
    // console.log(id)
    //  const teamId = id.toLowerCase()
    // console.log(allRecentMatches)

    return (
      <Link to={`/ipl/${id}`} className="link-component">
        <div className={`ipl-bg-container ${this.getBackgroundColor(teamId)}`}>
          <div className="ipl-bg-inside-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="banner-image"
            />
            <LatestMatch
              key={latestMatchDetailsList.id}
              latestMatchDetailsList={latestMatchDetailsList}
            />

            <ul className="match-card-container">
              {allRecentMatches.map(eachRecentMatch => (
                <MatchCard
                  eachRecentMatch={eachRecentMatch}
                  key={eachRecentMatch.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </Link>
    )
  }
}

export default TeamMatches
