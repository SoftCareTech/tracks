import React, { useState } from "react";
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from "../components/Spacer";


const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
        </Spacer> <Spacer>
            <Button title="Sign Up"
                onPress={() => {
                    navigation.navigate('Signin')
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
    }
})

export default SignupScreen
