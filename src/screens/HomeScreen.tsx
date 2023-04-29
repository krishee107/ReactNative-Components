

import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';






export const HomeScreen = () => {


    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8
                }}
            />
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems} // Array of data to render
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}// Function to render each item
                keyExtractor={(item) => item.name}// Function to generate a unique key for each item
                ListHeaderComponent={() => <HeaderTitle title="Opciones del menú:" />} // Function to render a header
                ItemSeparatorComponent={itemSeparator} // Function to render a separator
            />

        </View>
    )
}
