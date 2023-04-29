import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Animation102Screen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox} />
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
        backgroundColor: 'red',
        width: 150,
        height: 150
    }
});