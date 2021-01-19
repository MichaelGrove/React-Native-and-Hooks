import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textStyle} />
            <View style={styles.textTwoStyle} />
            <View style={styles.textThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'red',
        height: 80,
        width: 100,
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'green',
        height: 80,
        width: 100,
        top: 80
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'blue',
        height: 80,
        width: 100,
    },
})

export default BoxScreen
