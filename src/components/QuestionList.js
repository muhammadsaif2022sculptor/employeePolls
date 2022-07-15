import React from 'react'
import {connect} from 'react-redux'
import Question from './Question'

function QuestionList({title, ids, questions}) {
  return (
    <div className='list-container'>

    <div className='list-title'>{title}</div>
    <div className='list-questions'>
    {ids && ids.map(q => (
        <div key={q}>
            <Question id={q} />
        </div>
    ))}
    </div>
    </div>
  )
}

const mapStateToProps = ({questions}) => (
    {
        questions: questions
    }
)

export default connect(mapStateToProps)(QuestionList)