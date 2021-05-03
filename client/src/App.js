import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Nav from './components/Nav';
import Edit from './pages/Edit';
import Quiz from './pages/Quizzes';
import About from './pages/About';
import Liked from './pages/Liked'
import LikedQuizzesContainer from './containers/LikedQuizzesContainer'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <LikedQuizzesContainer.Provider>
          <Switch>
            <Route path="/edit">
              <Edit/>
            </Route>
            <Route path="/quizzes">
              <Quiz />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/liked">
              <Liked />
            </Route>
            <Route path="/">
              <Redirect to="/quizzes" />
            </Route>
          </Switch>
        </LikedQuizzesContainer.Provider>
      </div>
    </Router>
  );
}

export default App;
