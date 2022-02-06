import React, { useContext } from "react";
import { TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import Spacer from "./Spacer";
import { Text } from "react-native-elements";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext)

    if (!currentLocation)
        return <ActivityIndicator
            size={'large'} style={{ marginTop: 200 }}
        />
    return <>
        <Text h4>
            Map
        </Text>
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }
            }
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }
            }
        >
            <Circle
                radius={30}
                strokeColor='rgba(158,158,255,1.0)'
                fillColor="rgba(158,158,255,0.2)"
                center={currentLocation.coords}
            />
        </MapView>
    </ >
}
const styles = StyleSheet.create({
    map: {
        height: 400,
    }
})
export default Map

