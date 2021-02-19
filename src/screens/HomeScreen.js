import { Button } from "react-native-elements"
import React, { useState } from "react";
import { Text, StyleSheet, View, Alert, Modal, Pressable } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import ModalScreen from "./Modal";
import { event } from "react-native-reanimated";


const HomeScreen = (props) => {
  let isOpen = true


  return (
    <View style={container.view}>
      <View style={{ backgroundColor: '#3872AA', height: 100, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Icon
          style={{ marginTop: 10, marginLeft: 20 }}
          name='bars'
          type='font-awesome'
          color='white'


        />
        <Text style={styles.text}>HOME PAGE</Text>
      </View>


      <View style={{ height: 100 }}>

        <ModalScreen>

        </ModalScreen>

      </View>

      <View style={{ backgroundColor: '#265C91', height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

        <Icon
          name='home'
          type='font-awesome'
          color='white'
        />
        <Icon
          name='picture-o'
          type='font-awesome'
          color='white'
          reverseColor='blue'
          onPress={() => { props.navigation.navigate('Images') }}
        />
        <Icon
          name='user'
          type='font-awesome'
          color='white'
          onPress={() => { props.navigation.navigate('Components') }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingRight: 15,
    paddingTop: 10,
    color: 'white',
    textAlign: 'center'
  }
});
const container = StyleSheet.create({
  view: {
    backgroundColor: '#3872AA',
    flex: 1,
    justifyContent: 'space-between',
  }
})

export default HomeScreen;
