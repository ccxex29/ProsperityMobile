import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MiscItem from './UserMisc.d/MiscItem';

const UserMisc = () => {
    return (
        <View>
            <MiscItem itemText={'My Course List'} />
            <MiscItem itemText={'Misc Item Test'} />
        </View>
    );
};

export default UserMisc;
