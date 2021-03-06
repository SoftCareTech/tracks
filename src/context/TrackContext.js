import createDataCntext from './createDataContext'
import trackerApi from '../api/tracker'


const tractReducer = (state, action) => {
   switch (action.type) {
      case 'fetch_track':
      return action.payload
      default:
         return state
   }

}

const fetchTracks = dispatch => async () => { 
 const response = await trackerApi.get('tracks') 
  dispatch({type:'fetch_track',payload: response.data}) 
}
const createTrack = dispatch => async (name, locations) => {
   await trackerApi.post('tracks', { name, locations })
    
}

export const { Provider, Context } =
   createDataCntext(tractReducer,
      { fetchTracks, createTrack },
      [])
