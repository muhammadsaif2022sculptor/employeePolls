import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'

function Home({done, newQs, auth}) {
    const navigate = useNavigate()

    const data = [
        {
            key: 'd1',
            title: 'new',
            ids: newQs
        },
        {
            key: 'd2',
            title: 'done',
            ids: done
        }
    ]

    useEffect(() => {
        !auth && navigate('/login')
    },[auth, navigate])
    
  return (
    <div>
        <div className='home-list'>
        {data.map((d) => (
            <div key={d.key}>
                <QuestionList title={d.title} ids={d.ids} />
            </div>
        ))}
        </div>
    </div>
  )
}


const mapStateToProps = ({questions, userAuth, users}) => {
    if(userAuth) return {
        done: Object.keys(questions).filter(k => Object.keys(users[userAuth].answers).includes(k)).sort(
            (a,b) => questions[b].timestamp - questions[a].timestamp
        ),
        newQs : Object.keys(questions).filter(k => !Object.keys(users[userAuth].answers).includes(k)).sort(
            (a,b) => questions[b].timestamp - questions[a].timestamp
        ),
        auth: users[userAuth],
    }
    else return {}
}

export default connect(mapStateToProps)(Home)