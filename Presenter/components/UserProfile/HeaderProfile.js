import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import IconFA from 'react-native-vector-icons/dist/FontAwesome';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';
import IconEnt from 'react-native-vector-icons/dist/Entypo';

const HeaderProfile = () => {
    return (
        <View style={styles.headerProfile}>
            <IconAnt.Button backgroundColor={'rgba(0, 0, 0, .05)'}
                            underlayColor={'rgba(0, 0, 0, .2)'}
                            name={'arrowleft'}
                            size={20}
                            color={'white'}
                            borderRadius={100}
                            style={ styles.iconBack }
                            onPress={ () => Alert.alert('Info', 'Back Button', [{text: 'OK'}], { cancelable: true }) } />
            <View style={styles.headerRightStick}>
                <IconFA.Button backgroundColor={'transparent'}
                               underlayColor={'rgba(0, 0, 0, .2)'}
                               name={'qrcode'}
                               size={24}
                               color={'white'}
                               borderRadius={100}
                               style={ styles.iconNormalize }
                               onPress={ () => Alert.alert('Info', 'QRCode Button', [{text: 'OK'}], { cancelable: true }) } />
                <IconEnt.Button backgroundColor={'transparent'}
                                underlayColor={'rgba(0, 0, 0, .2)'}
                                name={'cog'}
                                size={24}
                                color={'white'}
                                borderRadius={100}
                                style={ styles.iconNormalize }
                                onPress={ () => Alert.alert('Info', 'Settings Button', [{text: 'OK'}], { cancelable: true }) } />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
    },
    headerRightStick: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconNormalize: {
        paddingVertical: 14,
        paddingLeft: 16,
    },
    iconBack: {
        paddingVertical: 16,
        paddingLeft: 16,
    },
});

export default HeaderProfile;

