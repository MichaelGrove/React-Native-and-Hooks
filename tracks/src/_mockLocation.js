import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const TEST_LAT = 0;
const TEST_LONG = 0;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: TEST_LONG + increment * tenMetersWithDegrees,
            latitude: TEST_LAT + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++;
}, 1000)
