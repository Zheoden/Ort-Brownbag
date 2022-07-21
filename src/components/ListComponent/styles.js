import { StyleSheet, StatusBar } from 'react-native';

export const ListComponentStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});


export const ListChildStyle = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 32,
        marginLeft: 16
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
