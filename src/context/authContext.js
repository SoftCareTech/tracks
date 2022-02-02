import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}
const signin=(dispatch)=>{

    return ({email,password})=>{
        //try signin
        //secus
        //failur
    }
}


export const { Provider, Context } = createDataContext(

    authReducer,
    {}
    , { isSignedIn: false }
)

