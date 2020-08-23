import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const UserImage = () => {
    return (
        <View style={ styles.imgLayout }>
            <Image
                source={require('../../../../assets/images/placeholder/user-icon-image-placeholder.jpg')}
                resizeMode={'contain'}
                style={{
                    ...styles.img,
                    borderWidth: 2,
                    borderColor: 'grey',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imgLayout: {
        justifyContent: 'center',
        marginLeft: 24,
    },
    img: {
        height: 120,
        width: 120,
    },
});

export default UserImage;
