
import '../_mockLocation'
import React, { useState, useCallback, useContext } from "react";
import { View, StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/map";
import { Text } from "react-native-elements";
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import  {FontAwesome} from '@expo/vector-icons'
const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, state.recording)
    }, [state.recording])

    const [err] = useLocation(isFocused, callback)
    return <SafeAreaView forceInset={{ top: 'always' }} >
        <Spacer><Text h2> Create a Track </Text>
        </Spacer>
        <Map />
        <TrackForm />
        {err ? <Text>{err}</Text> : null}
    </SafeAreaView>
}

TrackCreateScreen.navigationOptions = { 
        title:'Add Track',
        tabBarIcon:<FontAwesome name='plus' size={20}/>
};
const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen)






