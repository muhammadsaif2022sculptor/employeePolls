import {RECEIVE_USERS,SAVE_ANSWER_U, ADD_QUESTION_U} from '../actions/users'

export default function users(state ={} , action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_ANSWER_U:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                      ...state[action.authedUser].answers,
                      [action.qid]: action.answer
                    }
                  }
            }
        case ADD_QUESTION_U:
            return {
                ...state,
                [action.question.author] : {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        default:
            return state
    }
}