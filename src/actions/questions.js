export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const SAVE_ANSWER_Q = 'SAVE_ANSWER_Q'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function saveAnswerQuestion({authedUser, qid, answer}){
    return {
        type: SAVE_ANSWER_Q,
        authedUser, 
        qid, 
        answer
    }
}