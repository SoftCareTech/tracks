import { useState, useEffect } from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';


export default (shouldtrack, callback) => {
    const [err, setErr] = useState('')

    useEffect(() => {
        let subcriber
        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                if (granted) {
                    subcriber = await watchPositionAsync({
                        accuracy: Accuracy.BestForNavigation
                        , timeInterval: 1000,
                        distanceInterval: 10
                    }, (location) => {
                        callback(location)
                    })

                } else {
                    throw new Error('Location permission not granted');
                }
            } catch (e) {
                setErr('Permision Error');
            }
        };

        if (shouldtrack)
            startWatching()
        else
            if (subcriber != null) {
                subcriber.remove()
                subcriber = null
            }

        return () => {
            if (subcriber) {
                subcriber.remove()
            }
        }
    }, [shouldtrack, callback])


    return [err]
}


