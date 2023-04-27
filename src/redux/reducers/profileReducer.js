import * as actions from '../actions/actionTypes'

const profile = {
    _id: "",
    name: "",
    email: "",
    roll: "",
    is_faculty: false,
    courses_enrolled: [{
        _id: "",
        name:"",
        code:"",
        description:"",
    }],
    courses_tutoring: [{
        _id: "",
        name:"",
        code:"",
        description:"",
    }],
}

const profileReducer = (state=profile,action) => {
    switch(action.type){
        case actions.set_profile:
            let data = action.payload
            return {
                ...state,
                _id: data._id,
                name: data.name,
                email: data.email,
                roll: data.roll,
                is_faculty: data.is_faculty,
                courses_enrolled: data.courses_enrolled,
                courses_tutoring: data.courses_tutoring,
            }
        case actions.add_course_tutoring:
            let course = action.payload
            return {
                ...state,
                courses_tutoring: [...state.courses_tutoring,course]
            }
        case actions.add_course_enrolled:
            let course2 = action.payload
            return {
                ...state,
                courses_enrolled: [...state.courses_enrolled,course2]
            }
        default:
            return state
    }
}

export default profileReducer