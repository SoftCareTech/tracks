import React, { useState } from "react";
import { Text, Button, Input } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

import Spacer from './Spacer'


const AuthForm = ({ title, onSubmit, submitTitle, errorMessage }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return < >
        <Spacer>
            <Text h3>{title}</Text>
        </Spacer>
        <Spacer>
            <Input label="Email"
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
        </Spacer>
        <Spacer>
            <Input
                label="Password"
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}

                value={password}
                onChangeText={setPassword} />
        </Spacer>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <Spacer>

            <Button title={submitTitle}
                onPress={() => {
                    onSubmit({ email, password })
                }}
            />
        </Spacer>
    </>
}


const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 16
    }
})

export default AuthForm