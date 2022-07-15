import {SET_AUTHUSER, LOGOUT} from '../actions/userAuth'

export default function userAuth (state = null, action) {
    switch(action.type){
        case SET_AUTHUSER:
            return action.id
        case LOGOUT:
            return null
        default:
            return state
    }
}