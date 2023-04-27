import * as actions from '../actions/actionTypes'

export const set_profile = (data) => {
    return {
        type: actions.set_profile,
        payload: data
    }
}

export const add_course_tutoring = (data) => {
    return {
        type: actions.add_course_tutoring,
        payload: data
    }
}