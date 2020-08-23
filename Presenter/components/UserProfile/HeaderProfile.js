import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconFA from 'react-native-vector-icons/dist/FontAwesome';
import IconAnt from 'react-native-vector-icons/dist/AntDesign';
import IconEnt from 'react-native-vector-icons/dist/Entypo';

const HeaderProfile = () => {
    return (
        <View style={styles.headerProfile}>
            <IconAnt.Button backgroundColor={'transparent'} name={'arrowleft'} size={20} color={'white'} style={ styles.iconBack } />
            <View style={styles.headerRightStick}>
                <IconFA.Button backgroundColor={'transparent'} name={'qrcode'} size={24} color={'white'} style={ styles.iconNormalize } />
                <IconEnt.Button backgroundColor={'transparent'} name={'cog'} size={24} color={'white'} style={ styles.iconNormalize } />
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
        paddingVertical: 14,
        paddingLeft: 16,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, .1)',
    }
});

export default HeaderProfile;

