import React from "react";
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-navigation";
import Map from "../components/map";
import { Text } from "react-native-elements";
import Spacer from '../components/Spacer'

const TrackCreateScreen = () => {

    return <SafeAreaView forceInset={{ top: 'always' }} >
        <Spacer><Text h2> Create a Track </Text>
        </Spacer>
        <Map />


    </SafeAreaView>
}


const styles = StyleSheet.create({

})

export default TrackCreateScreen
