import {Platform, StatusBar, StyleSheet} from 'react-native';

export default StyleSheet.create({
    StatusBarSafeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})
