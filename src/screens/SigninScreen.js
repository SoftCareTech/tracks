import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext)

    return <View style={styles.container}>
        <AuthForm title='Sign in for Tracker'
            submitTitle='Sign In'
            onSubmit={signin}
            errorMessage={state.errorMessage}
        />
        <Spacer>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Signup')
            }}>
                <Text style={styles.link}>
                    I Don't have an account Sign up instead
                </Text>
            </TouchableOpacity>
        </Spacer>
    </View>
}

SigninScreen.navigationOptions = () => {
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


export default SigninScreen
