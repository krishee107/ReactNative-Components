import React, { useRef } from 'react'
import { StyleSheet, View, Animated, PanResponder } from 'react-native'

export const Animation102Screen = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan.x, dy: pan.y }
            ],
            {
                useNativeDriver: false
            }
        ),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }
            ).start();
        }
    });


    return (
        <View style={styles.container}>
            <Animated.View
                style={[pan.getLayout(), styles.purpleBox]}
                {...panResponder.panHandlers}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#75CBEB',
        width: 150,
        height: 150
    }
});