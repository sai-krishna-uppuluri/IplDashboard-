import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <>
    <Route exact path="/" component={Home} />
    <Switch>
      <Route exact path="/ipl/:id" component={TeamMatches} />
    </Switch>
  </>
)
export default App
