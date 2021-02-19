import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ImageDetail = (props) => {
    console.log(props)
    return (
        <View style={styles.view}>
            <Image style={{ width: 300, height: 300 }} source={props.imageShow}></Image>
            <Text >{props.title}</Text>
        </View>

    )
};
const styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    }
})

export default ImageDetail;