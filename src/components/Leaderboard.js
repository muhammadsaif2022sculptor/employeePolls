import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Leaderboard({users, sorted, auth}) {
    const navigate = useNavigate()
    useEffect(() => {
        !auth && navigate('/login')
    },[auth, navigate])
  return (
    users && 
    <>
        <div className='leaderboard-container'>
            <div className='leaderboard-row'>
                <div className='leaderboard-c1'>User</div>
                <div className='leaderboard-c2'>Answered</div>
                <div className='leaderboard-c3'>Created</div>
            </div>
            {sorted.map(id => (
                <div key={'u'+id} className='leaderboard-row'>
                <div className='leaderboard-c1'>
                    <img style={{
                        height: '30px',
                        width: '30px',
                        borderRadius: '50%'
                    }} src={users[id].avatarURL} alt={users[id].name} />
                    {users[id].name}
                </div>
                <div className='leaderboard-c2'>{Object.keys(users[id].answers).length}</div>
                <div className='leaderboard-c3'>{Object.keys(users[id].questions).length}</div>
                </div>
            ))}  
        </div>
    </>
    )
}

const mapStateToProps = ({users,userAuth}) => (
    {
        sorted: Object.keys(users).sort(
            (a,b) => {
                const sumB = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length
                const sumA = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
                return sumB - sumA
            }
        ),
        users: users,
        auth: userAuth
    }
)

export default connect(mapStateToProps)(Leaderboard)