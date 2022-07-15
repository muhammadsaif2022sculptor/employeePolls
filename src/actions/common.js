import {getInitialData, saveQuestionAnswer, saveQuestion} from '../utils/api'
import {receiveQuestions, saveAnswerQuestion, addQuestion} from './questions'
import {receiveUsers, saveAnswerUser, addQuestionU} from './users'

export function handleData () {

    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

export function handleSaveAnswer(info) {
    return (dispatch) => {
        saveQuestionAnswer(info)
      .then(() => {
        dispatch(saveAnswerQuestion(info));
        dispatch(saveAnswerUser(info));
      })
      .catch((e) => {
        console.warn("Error in saving answer: ", e);
        alert("There was an error while saving the answer. Please Try again.");
      });
    }
}


export function handleAddQuestion(question){
    return (dispatch) => {
        saveQuestion(question)
      .then((data) => {
        dispatch(addQuestion(data))
        dispatch(addQuestionU(data))
      })
      .catch((e) => {
        console.warn("Error in adding question: ", e);
        alert("There was an error while adding new question. Please Try again.");
      });
    }
}