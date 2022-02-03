import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from "../context/AuthContext";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
const AccountScreen = () => {
    const { signout } = useContext(AuthContext)

    return <>
        <Spacer><Text h2> Account Screen </Text>
        </Spacer>
        <Spacer> <Button title={"Sign Out"}
            onPress={signout} />
        </Spacer>
    </>
}


const styles = StyleSheet.create({

})

export default AccountScreen
