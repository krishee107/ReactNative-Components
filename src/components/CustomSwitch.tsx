import React from 'react'
import { Platform, Switch } from 'react-native';
import { useState } from 'react';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}
export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: "#d9d9db", true: "#5856D6" }} // Color of the switch track
            thumbColor={
                Platform.OS === "android" ? "#5856D6" : "" // Color of the switch thumb 
            } // Only for Android devices, it is the color of the switch
            //ios_backgroundColor="#3e3e3e" // Only for iOS devices, it is the color of the background of the switch
            onValueChange={toggleSwitch} // Function to execute when the switch is pressed
            value={isEnabled} // Boolean value to determine if the switch is on or off
        />
    )
}
