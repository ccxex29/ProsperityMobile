import { StyleSheet } from 'react-native';
import AndroidSafeAreaView from './AndroidSafeAreaView';

export default StyleSheet.create({
    StatusBarSafePage: {
        ...AndroidSafeAreaView.StatusBarSafeArea,
        flex: 1,
        backgroundColor: '#007388',
    },
});
