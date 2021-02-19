import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import ImageDetail from '../components/ImageDetail'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const ImageScreen = (props) => {
    return (
        <View style={styles.view}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <ImageDetail title={"Doris"} imageShow={require('../../assets/doriss.jpg')}></ImageDetail>
                    <ImageDetail title={"Forest"} imageShow={require('../../assets/forest.jpg')}></ImageDetail>
                    <ImageDetail title={"Mountain"} imageShow={require('../../assets/mountain.jpg')}></ImageDetail>
                </ScrollView>
            </SafeAreaView>
            <View style={{ alignItems: 'center' }}>
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
};

const styles = StyleSheet.create(
    {
        view: {
            backgroundColor: '#3872AA',

            flex: 1,
            justifyContent: 'space-between'

        },
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
        scrollView: {
            backgroundColor: '#3872AA',
            marginHorizontal: 20,
        },
        text: {
            fontSize: 42,
        }
    })
const styleing = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        // backgroundColor: '#005086',
        height: 50,
        color: '#BEEAFF',
        textAlign: 'center',
        // marginBottom: 30,
        fontWeight: 'bold'
    }
});
export default ImageScreen;















