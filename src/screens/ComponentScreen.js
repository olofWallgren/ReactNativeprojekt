import React from 'react'
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetail from '../components/ImageDetail'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const ComponentScreen = (props) => {
    return (
        <View style={styles.componentStyle}>
            <View style={{ backgroundColor: '#3872AA', height: 30, justifyContent: 'center', paddingTop: 120 }}>
                <Text style=
                    {styleing.textStyle} >
                    React Native
                </Text>
                <Text style=
                    {{
                        color: 'white',
                        padding: 10
                    }}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Text>
                <Text style=
                    {{
                        color: 'white',
                        padding: 10
                    }}>Projekt Ramverk Av: Olof W. Klass: FED20G </Text>
            </View>
            <View>

            </View>
            <View style={{ backgroundColor: '#265C91', height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                <Icon
                    name='home'
                    type='font-awesome'
                    color='white'
                    onPress={() => { props.navigation.navigate('Home') }}
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
    )
}
const styles = StyleSheet.create({
    componentStyle: {
        backgroundColor: '#3872AA',
        flex: 1,
        justifyContent: 'space-between'
    }
});
const styleing = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        paddingTop: 20,
        color: 'white',
        textAlign: 'center',
        // height: 30
    }
});
export default ComponentScreen;