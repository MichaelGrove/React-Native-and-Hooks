import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')

    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                value={name}
                onChangeText={val => setName(val)}
            />

            <Text>My name is: {name}</Text>

            <Text>{name.length > 0 && name.length < 5 ? 'Password must be longer than 5 characters' : null}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
})

export default TextScreen
