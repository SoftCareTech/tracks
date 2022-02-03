import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
const authReducer = (state, action) => {
    switch (action.type) {
        case 'signup':
            return { token: action.payload, errorMessage: '' }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const respose = await trackerAPI.post('/signup', { email, password })
        await AsyncStorage.setItem('token', respose.data.token)
        dispatch({ type: "signup", payload: respose.data.token })
    } catch (err) {
        //console.log(err.respose.data)
        dispatch({ type: "add_error", payload: ' Something went wrong with signup' })
    }
}
const signin = (dispatch) => async ({ email, password }) => {
    //try signin
    //secus
    //failure
}
const signout = (dispatch) => () => {
    //try signout 
}



export const { Provider, Context } = createDataContext(

    authReducer,
    { signup, signin, signout }
    , { token: null, errorMessage: "" }
)

