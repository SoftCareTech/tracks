import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native'



const TrackListScreen = ({ navigation }) => {

    return <>
        <Text> TrackListScreen </Text>

        <Button title="Go to Details"
            onPress={() => {
                navigation.navigate('TrackDetails')
            }}
        />
    </>
}


const styles = StyleSheet.create({

})

export default TrackListScreen
