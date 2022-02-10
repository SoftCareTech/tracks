import React, {useContext}  from "react";
import {View,   StyleSheet} from 'react-native'
import {Context as TrackContext} from '../context/TrackContext'
import {Text} from 'react-native-elements'
import MapView, { Polyline } from "react-native-maps";



const TrackDetailsScreen=({navigation})=>{
const {state } = useContext(TrackContext)
const _id = navigation.getParam('_id')
  const track = state.find(t=>t._id===_id)  
   const initialCoords= track.locations[0].coords 
    return<>
<Text h3>  {track.name} </Text>
<MapView
initialRegion={{
    longitudeDelta:0.01,
    latitudeDelta:0.01,
    ...initialCoords
}}
style={styles.map}
>
<Polyline coordinates={track.locations.map(loc=>loc.coords)}/>
 </MapView>
</>
}

TrackDetailsScreen.navigationOptions = { 
        title:'Track'
};
const styles = StyleSheet.create({
 map:{
     height:250
 }
})

export default TrackDetailsScreen
