import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'
import { CustomSwitch } from '../components/CustomSwitch'
import { useForm } from '../hooks/useForm'

export const TextInputScreen = () => {
    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView // Permite hacer scroll cuando el teclado aparece para poder ver los inputs
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Padding para iOS, height para Android
        >
            {/*Permite hacer scroll cuando el teclado aparece para poder ver los inputs*/}
            <ScrollView>

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


                    <HeaderTitle title={JSON.stringify(form, null, 3)} />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} />
                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder='Ingrese su teléfono'
                        autoCorrect={false}
                        keyboardType='phone-pad' // Show numeric keyboard
                        onChangeText={(value) => onChange(value, 'phone')} // Update form.phone
                    />


                </View>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}
                >
                    <Text style={stylesScreen.switchText}> Suscribirme </Text>
                    <CustomSwitch isOn={isSubscribed} onChange={(value: boolean) => onChange(value, 'isSubscribed')} />
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

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
    },
    switchText: {
        fontSize: 25
    }
})