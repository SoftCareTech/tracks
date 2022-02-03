import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";
const SignupScreen = () => {
    const { state, tryLocalSignin, signup, clearErrorMessage } = useContext(AuthContext)
    useEffect(() => {
        tryLocalSignin()
    }, []
    )

    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={clearErrorMessage}
        />
        <AuthForm title='Sign Up for Tracker'
            submitTitle='Sign Up'
            onSubmit={signup}
            errorMessage={state.errorMessage}
        />
        <NavLink
            text={' Already have an account Sign in instead'}
            routeName={'Signin'}

        />


    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1
        , justifyContent: "center"
        , marginBottom: 100
    },
    link: {
        color: 'blue'
    }
})

export default SignupScreen
