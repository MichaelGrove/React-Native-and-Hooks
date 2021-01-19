import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, counter: state.counter + 1 }
        case 'DECREASE':
            return { ...state, counter: state.counter - 1 }
        default:
            return state;
    }
}

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    const { counter } = state;

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({type: 'INCREASE'})} />
            <Button title="Decrease" onPress={() => dispatch({type: 'DECREASE'})} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen
