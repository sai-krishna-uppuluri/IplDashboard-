import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  getMatchDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    console.log(data)
  }

  componentDidMount = () => {
    this.getMatchDetails()
  }

  render() {
    return (
      <div className="ipl-bg-container">
        <div className="ipl-bg-inside-container">
          <img src="banner-image" alt="banner" className="banner-image" />
          <LatestMatch />
        </div>
      </div>
    )
  }
}

export default TeamMatches
