import React, { useRef, useState } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'

export const Animation101Screen = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const top = useRef(new Animated.Value(-100)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start();

        Animated.timing(
            top,
            {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
                easing: Easing.bounce // Para que rebote al final
            }).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();

        Animated.timing(
            top,
            {
                toValue: -100,
                duration: 700,
                useNativeDriver: true,
                easing: Easing.bounce // Para que rebote al final
            }).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity: opacity,
                transform: [{
                    translateY: top
                }]
            }} />

            <Button
                title="FadeIn"
                onPress={fadeIn}
            />
            <Button
                title="FadeOut"
                onPress={fadeOut}
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
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});