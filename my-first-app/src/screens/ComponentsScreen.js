import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const myname = 'Mikael';
    return (
        <View>
            <Text style={styles.greetingTextStyle}>
                Getting starte with React Native
            </Text>
            <Text style={styles.nameTextStyle}>
                My name is {myname}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    greetingTextStyle: {
        fontSize: 45
    },
    nameTextStyle: {
        fontSize: 20
    },
})

export default ComponentsScreen
