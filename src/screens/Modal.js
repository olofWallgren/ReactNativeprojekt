import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ModalScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Denna appen är under konstruktion och kommer förmodligen inte bli klar!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle2}>Tillbaka!</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>App Info!</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 200
    },
    buttonOpen: {
        backgroundColor: "white",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#2196F3",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textStyle2: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default ModalScreen;