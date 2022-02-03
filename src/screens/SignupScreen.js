import React, { useState, useContext } from "react";
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(state)
    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Spacer>
            <Input label="Email"
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
        </Spacer>
        <Spacer> <Input
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={setPassword}
        />
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

        </Spacer>
        <Spacer>

            <Button title="Sign Up"
                onPress={() => {
                    signup({ email, password })
                }}
            />
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
    errorMessage: {
        color: 'red'
        , fontSize: 16
    }
})

export default SignupScreen
