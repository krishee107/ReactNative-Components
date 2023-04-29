import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const onChange = (value: string, field: keyof typeof form) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='TextInput' />

            <TextInput
                style={stylesScreen.inputStyle}
                placeholder='Ingrese su nombre' // Placeholder text
                autoCorrect={false} // Disable autocorrect
                autoCapitalize='words' // Capitalize words
                onChangeText={(value) => onChange(value, 'name')} // Update form.name
            />

            <TextInput
                style={stylesScreen.inputStyle}
                placeholder='Ingrese su email'
                autoCorrect={false}
                autoCapitalize='none' // Do not capitalize
                keyboardType='email-address' // Show email keyboard
                onChangeText={(value) => onChange(value, 'email')} // Update form.email
                keyboardAppearance='dark' // Dark keyboard appearance (iOS only)
            />

            <TextInput
                style={stylesScreen.inputStyle}
                placeholder='Ingrese su teléfono'
                autoCorrect={false}
                keyboardType='phone-pad' // Show numeric keyboard
                onChangeText={(value) => onChange(value, 'phone')} // Update form.phone
            />


            <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
    )
}
const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    }
})