import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamData: {},
    isLoading: true,
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const {teams} = data
    const updatedTeamCardData = teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))

    this.setState({
      teamData: updatedTeamCardData,
      isLoading: false,
    })
  }

  componentDidMount = () => {
    this.getTeamCards()
  }

  render() {
    const {teamData, isLoading} = this.state
    // console.log(teamData)

    return (
      <Link to="/home" className="link-component">
        <div className="home-bg-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} />
            </div>
          ) : (
            <>
              <div className="home-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  className="logo"
                  alt="ipl logo"
                />
                <h1 className="home-main-heading"> IPL DashBoard</h1>
              </div>
              <div className="team-card-container">
                <ul className="team-cards">
                  {teamData.map(eachTeam => (
                    <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
