import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from "./Spacer";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
    let points = []
    for (let i = 0; i < 20; i++) {
        points.push({
            latitude: 37.33121 + i * 0.001,
            longitude: -122.03121 + i * 0.001,
        })
    }

    return <>
        <Text h4>
            Map
        </Text>
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.33121,
                longitude: -122.03121,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }
            }
        >
            <Polyline coordinates={points} />
        </MapView>
    </ >
}
const styles = StyleSheet.create({
    map: {
        height: 400,
    }
})
export default Map

 