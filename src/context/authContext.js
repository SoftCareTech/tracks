import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return   {...state,errorMessage: action.payload}
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const respose = await trackerAPI.post('/signup', { email, password })
            console.log(respose.data)
        } catch (err) {
            //console.log(err.respose.data)
       dispatch({type:"add_error", payload:' Something went wrong with signup'})
        }
    }
}
const signin = (dispatch) => {

    return async ({ email, password }) => {
        //try signin
        //secus
        //failure
    }
}
const signout = (dispatch) => {

    return () => {
        //try signout 
    }
}


export const { Provider, Context } = createDataContext(

    authReducer,
    { signup, signin, signout }
    , { isSignedIn: false, errorMessage:"" }
)

