import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";



const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { token: action.payload, errorMessage: '' }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }

        default:
            return state
    }
}

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token')

    if (token) {
        try {
            dispatch({ type: "signin", payload: token })
            navigate('TrackList')
        }
        catch (e) {

        }
    } else navigate('Singup')
}
const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" })
}
const signup = (dispatch) => async ({ email, password }) => {
    try {
        const respose = await trackerAPI.post('/signup', { email, password })
        await AsyncStorage.setItem('token', respose.data.token)
        dispatch({ type: "signin", payload: respose.data.token })
        navigate('TrackList')
    } catch (err) {
        //console.log(err.respose.data)
        dispatch({ type: "add_error", payload: ' Something went wrong with signup' })
    }
}
const signin = (dispatch) => async ({ email, password }) => {
    try {
        const respose = await trackerAPI.post('/signin', { email, password })
        await AsyncStorage.setItem('token', respose.data.token)
        dispatch({ type: "signin", payload: respose.data.token })
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: "add_error", payload: ' Something went wrong with signin' })
    }
}
const signout = (dispatch) => () => {
    //try signout 
}



export const { Provider, Context } = createDataContext(

    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin }
    , { token: null, errorMessage: "" }
)

