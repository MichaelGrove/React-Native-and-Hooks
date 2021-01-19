import React, { useReducer } from 'react'
import { View, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    if (state[action.payload.color] + action.payload.amount > 255 || state[action.payload.color] + action.payload.amount < 0) {
        return state;
    }

    switch (action.type) {
        case 'CHANGE_RED':
            return { ...state, red: state.red + action.payload.amount }
        case 'CHANGE_GREEN':
            return { ...state, green: state.green + action.payload.amount }
        case 'CHANGE_BLUE':
            return { ...state, blue: state.blue + action.payload.amount }
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });

    const { red, green, blue } = state;



    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({
                    type: 'CHANGE_RED', 
                    payload: { color: 'red', amount: COLOR_INCREMENT } })}
                onDecrease={() => dispatch({
                    type: 'CHANGE_RED', payload: { color: 'red', amount: -1 * COLOR_INCREMENT } })}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => dispatch({
                    type: 'CHANGE_GREEN',
                    payload: { color: 'green', amount: COLOR_INCREMENT } })}
                onDecrease={() => dispatch({
                    type: 'CHANGE_GREEN',
                    payload: { color: 'green', amount: -1 * COLOR_INCREMENT } })}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => dispatch({
                    type: 'CHANGE_BLUE',
                    payload: { color: 'blue', amount: COLOR_INCREMENT } })}
                onDecrease={() => dispatch({
                    type: 'CHANGE_BLUE',
                    payload: { color: 'blue', amount: -1 * COLOR_INCREMENT } })}
                color="Blue"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen
