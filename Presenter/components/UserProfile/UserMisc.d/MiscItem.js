import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const MiscItem = props => {
    return (
        <TouchableHighlight underlayColor={'#DDD'} onPress={ () => Alert.alert('Info', 'Action Test', [{text: 'OK'}], { cancelable: true }) } style={ styles.itemContainer }>
            <View style={ styles.itemContainerView }>
                <Text style={ styles.itemText }>{ props.itemText }</Text>
                <Icon name={'arrow-forward-circle-outline'} size={28} color={'black'} />
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 24,
        marginHorizontal: 24,
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    itemContainerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 22,
    },
});

export default MiscItem;

