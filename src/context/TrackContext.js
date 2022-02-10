import createDataCntext from './createDataContext'
import trackerApi from '../api/tracker'


const tractReducer = (state, action) => {
   switch (action.type) {

      default:
         return state
   }

}

const fetchTracks = dispatch => async () => {

}
const createTrack = dispatch => async (name, locations) => {
   await trackerApi.post('tracks', { name, locations })
   const r = await trackerApi.get('tracks')
   console.log(r.data)
}

export const { Provider, Context } =
   createDataCntext(tractReducer,
      { fetchTracks, createTrack },
      [])
