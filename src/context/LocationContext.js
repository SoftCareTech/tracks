import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
 case 'start_recording':
            return { ...state, recording:true }
 case 'stop_recording':
            return { ...state, recording:false }
case 'add_location':
            return { ...state ,locations:[...state.locations, action.payload] }
        default: return state
    }
}


const startReccording = dispatch => () => {
 dispatch({type:'start_recording'})
}

const stopRecording = dispatch => () => {
dispatch({type:'stop_recording'})
}
const addLocation = dispatch => (location,recording) => {
     
    dispatch({
        type: 'add_current_location',
        payload: location
    })
    if(recording) dispatch({
        type: 'add_location',
        payload: location
    })
}
const changeName = dispatch => (name) => {
 dispatch({type:'change_name', payload:name})
}
export const { Context, Provider } =
    createDataContext(locationReducer, {
       changeName, startReccording, stopRecording, addLocation
    }, {
       name:'', recording: false, locations: [], currentLocation: null
    })



