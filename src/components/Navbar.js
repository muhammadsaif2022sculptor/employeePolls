import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/userAuth'

function Navbar({dispatch, auth}) {
    const navigate = useNavigate()

    function handleLogout(){
        dispatch(logout())
        navigate('/login')
    }

  return (
    <nav className='navbar'>
    <ul className="nav-links">
      <Link to="/" className='a'>
        <li data-testid='home'>Home</li>
      </Link>
      <Link to="/leaderboard" className='a'>
        <li data-testid='leaderboard'>Leaderboard</li>
      </Link>
      <Link to="/add" className='a'>
        <li data-testid='new'>New</li>
      </Link>
    </ul>
    <div className='logout'>
        {auth && <><img 
        style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginRight: '5px'
        }} src={auth.avatarURL} alt="" />
        <p>{auth.name}</p></>}
        <ul className="nav-links"><li data-testid='logout' className='logout-button' onClick={handleLogout}>Logout</li></ul>
    </div>
</nav>
  )
}

const mapStateToProps = ({ userAuth, users }) => ({
    auth: users[userAuth],
});

export default connect(mapStateToProps)(Navbar)