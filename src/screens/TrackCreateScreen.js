
import '../_mockLocation'
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-navigation";
import Map from "../components/map";
import { Text } from "react-native-elements";
import Spacer from '../components/Spacer'

import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

const TrackCreateScreen = () => {
    const [err, setErr] = useState('')
    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if (granted) {
                await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation
                    , timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => {
                    console.log(location)
                })
            } else {
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr('Permision Error');
        }
    };
    useEffect(() => {
        startWatching()
    }, [])
    return <SafeAreaView forceInset={{ top: 'always' }} >
        <Spacer><Text h2> Create a Track </Text>
        </Spacer>
        <Map />
        {err ? <Text>{err}</Text> : null}
    </SafeAreaView>
}


const styles = StyleSheet.create({

})

export default TrackCreateScreen
