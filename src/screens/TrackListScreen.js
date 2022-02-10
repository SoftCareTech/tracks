import React, {useContext} from  "react";
import {FlatList,TouchableOpacity, View,  StyleSheet  } from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Context as TrackContext} from '../context/TrackContext'
import {ListItem,Text} from 'react-native-elements'
const TrackListScreen = ({ navigation }) => {
 const {state,fetchTracks} = useContext(TrackContext)

    return <>
    
    <NavigationEvents 
    onWillFocus={fetchTracks} 
     />
       <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('TrackDetails',{_id:item._id})}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />

         
    </>
}

TrackListScreen.navigationOptions =  { 
        title:'Tracks'
};
const styles = StyleSheet.create({

})

export default TrackListScreen
