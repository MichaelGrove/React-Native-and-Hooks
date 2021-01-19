import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRefs'

const authReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_ERROR':
            return { ...state, errorMessage: payload }
        case 'SIGNIN':
            return { ...state, token: payload, errorMessage: '' }
        case 'SIGNOUT':
            return { ...state, token: null, erroeMessage: '' }
        case 'CLEAR_ERROR':
            return { ...state, errorMessage: '' }
        default:
            return state;
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'CLEAR_ERROR' })
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'SIGNIN', payload: token });
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'SIGNIN', payload: response.data.token })

        navigate('TrackList')
    } catch (e) {
        console.log(e);
        dispatch({
            type: 'SET_ERROR',
            payload: 'Something went wrong with sign up'
        })
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'SIGNIN', payload: response.data.token })

        navigate('TrackList')
    } catch (e) {
        console.log(e);
        dispatch({
            type: 'SET_ERROR',
            payload: 'Something went wrong with sign in'
        })
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'SIGNOUT' });
    navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
    authReducer, 
    {
        signup,
        signin,
        signout,
        clearErrorMessage,
        tryLocalSignin,
    }, 
    { token: null, errorMessage: '' }
)
