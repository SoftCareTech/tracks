import React, { useEffect, useContext } from "react";

import { Context as AuthContext } from "../context/AuthContext";

const ResoveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext)
    useEffect(() => {
        tryLocalSignin()
    }, []
    )

    return null
}
ResoveAuthScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
export default ResoveAuthScreen

