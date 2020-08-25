import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import IconFA from 'react-native-vector-icons/dist/FontAwesome';

const MainScreenHeader = () => {
    return (
        <View style={ styles.headerTerm }>
            <IconFA.Button backgroundColor={'transparent'}
                            underlayColor={'rgba(0, 0, 0, .2)'}
                            name={'user-circle-o'}
                            size={24}
                            color={'white'}
                            borderRadius={100}
                            style={ styles.iconProfile }
                            onPress={ () => Alert.alert('Info', 'Profile Button', [{text: 'OK'}], { cancelable: true }) } />
        </View>
    );
};

const styles = StyleSheet.create({
    headerTerm: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
    },
    iconProfile: {
        paddingVertical: 16,
        paddingLeft: 16,
    },
});

export default MainScreenHeader;
