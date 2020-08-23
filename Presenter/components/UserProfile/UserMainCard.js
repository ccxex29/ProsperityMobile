import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserImage from './UserCard.d/UserImage';
import UserInformation from './UserCard.d/UserInformation';

const UserMainCard = () => {
    return (
        <View style={ styles.cardContainer }>
            <UserImage />
            <UserInformation />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: 24,
        marginTop: 16,
        marginBottom: 36,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 200,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
});

export default UserMainCard;
