import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserCard = () => {
    return (
        <View style={ styles.cardContainer }>
            <View style={ styles.imgLayout }>
                <Image
                    source={require('../../../assets/images/placeholder/user-icon-image-placeholder.jpg')}
                    style={{
                        ...styles.img,
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: 'grey',
                    }}
                />
            </View>
            <View style={ styles.userInfo }>
                <Text style={ styles.userName }>USER NAME</Text>
                <Text style={ styles.userId }>11411113312</Text>
                <Text style={ styles.userEducation }>Faculty/Major</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: 24,
        marginTop: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 200,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imgLayout: {
        justifyContent: 'center',
        marginLeft: 24,
    },
    img: {
        height: 120,
        width: 120,
    },
    userInfo: {
        justifyContent: 'flex-start',
        marginHorizontal: 28,
        marginVertical: 52,
    },
    userName: {
        fontSize: 24,
    },
    userId: {
        fontSize: 20,
    },
    userEducation: {
        fontSize: 18,
    },
});

export default UserCard;
