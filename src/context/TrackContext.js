import createDataCntext from './createDataContext'

const tractReducer=(state, action)=>{
switch (action.type){

    default:
     return state
}  

}

const fetchTracks= dispatch=> async()=>{

}
const createTrack= dispatch=> async()=>{
    
}

export const{ Provider, Context}=
createDataCntext(tractReducer,
{fetchTracks,createTrack},
[])
