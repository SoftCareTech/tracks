import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)


    return <View style={styles.container}>
        <AuthForm title='Sign Up for Tracker'
            submitTitle='Sign Up'
            onSubmit={signup}
            errorMessage={state.errorMessage}
        />
        <Spacer>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Signin')
            }}>
                <Text style={styles.link}>
                    Already have an account Sign in instead
                </Text>
            </TouchableOpacity>
        </Spacer>
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
