import React, { useState } from 'react'
import { Platform, Switch, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return (
        <View
            style={{
                marginHorizontal: 20
            }}
        >
            <HeaderTitle title="Switches:" />
            <Switch
                trackColor={{ false: "#d9d9db", true: "#5856D6" }} // Color of the switch track
                thumbColor={
                    Platform.OS === "android" ? "#5856D6" : "" // Color of the switch thumb 
                } // Only for Android devices, it is the color of the switch
                //ios_backgroundColor="#3e3e3e" // Only for iOS devices, it is the color of the background of the switch
                onValueChange={toggleSwitch} // Function to execute when the switch is pressed
                value={isEnabled} // Boolean value to determine if the switch is on or off
            />

        </View>
    )
}
