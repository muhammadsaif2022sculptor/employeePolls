import '../App.css';
import {connect} from 'react-redux'
import { useEffect } from 'react';
import {handleData} from '../actions/common'
import Home from './Home';
import Leaderboard from './Leaderboard';
import NewQ from './NewQ';
import Poll from './Poll';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login';
import NotFound from './NotFound';

function App({dispatch, auth}) {

  useEffect(()=>{
    dispatch(handleData())
  },[dispatch])

  return (<>
  <Router>
  {auth && <Navbar />}
  <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/leaderboard" element={<Leaderboard />} />
      <Route exact path="/add" element={<NewQ />} />
      <Route exact path="/questions/:question_id" element={<Poll />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  </Router>
    </>
  );
}

const mapStateToProps = ({ questions, userAuth }) => ({
  questions: questions,
  auth: userAuth
});


export default connect(mapStateToProps)(App);
