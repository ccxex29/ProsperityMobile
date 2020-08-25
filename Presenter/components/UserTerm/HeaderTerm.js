import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';

const HeaderTerm = () => {
    return (
        <View style={ styles.headerTerm }>
            <IconAnt.Button backgroundColor={'rgba(0, 0, 0, .03)'}
                            underlayColor={'rgba(0, 0, 0, .2)'}
                            name={'arrowleft'}
                            size={20}
                            color={'white'}
                            borderRadius={100}
                            style={ styles.iconBack }
                            onPress={ () => Alert.alert('Info', 'Back Button', [{text: 'OK'}], { cancelable: true }) } />
        </View>
    );
};

const styles = StyleSheet.create({
    headerTerm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
    },
    iconBack: {
        paddingVertical: 16,
        paddingLeft: 16,
    },
});

export default HeaderTerm;
