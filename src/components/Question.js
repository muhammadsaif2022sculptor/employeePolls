import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

function Question({id, questions}) {

    function getDate(timestamp) {
        const date = new Date(timestamp)
        const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return  "" + time  + " | " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    }

  return (
        questions && 
        <>
            <div className='question-container'>
                <p className='question-author'>{questions[id].author}</p>
                <p className='question-date'>{getDate(questions[id].timestamp)}</p>
                <Link to={"/questions/"+id} style={{width:'100%'}}>
                    <button className='question-button'>show</button>
                </Link>
            </div>
        </>
  )
}

const mapStateToProps = ({questions}) => (
    {
        questions: questions
    }
)

export default connect(mapStateToProps)(Question)