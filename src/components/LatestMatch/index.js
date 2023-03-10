import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  return (
    <div>
      <p> Latest matches</p>
      <div className="latest-match-details">
        <p>umpires</p>
      </div>
    </div>
  )
}

export default LatestMatch
