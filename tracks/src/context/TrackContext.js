import createDataContaxt from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_TRACKS':
            return payload
        default:
            return state;
    }
}

const fetchTracks = dispatch => async () => {
    const { data } = await trackerApi.get('/tracks');
    dispatch({ type: 'SET_TRACKS', payload: data });
}

const createTrack = dispatch => async (name, locations) => {
    try {
        await trackerApi.post('/tracks', { name, locations })
    } catch (e) {
        console.warn(e);
    }
}

export const { Context, Provider } = createDataContaxt(
    trackReducer,
    { fetchTracks, createTrack },
    []
);
