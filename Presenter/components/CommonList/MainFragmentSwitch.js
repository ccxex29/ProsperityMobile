import React from 'react';
import { View, StyleSheet } from 'react-native';
import FragmentSwitchButton from './MainFragmentSwitch.d/FragmentSwitchButton';

const MainFragmentSwitch = props => {
    return (
        <View style={ styles.fragmentSwitcherContainer }>
            <FragmentSwitchButton
                setter={ props.setter }
                state={ props.state }
                name={'schedule'}
            />
            <FragmentSwitchButton
                setter={ props.setter }
                state={ props.state }
                name={'finance'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    fragmentSwitcherContainer: {
        flexDirection: 'row',
        backgroundColor: '#333',
    },
});

export default MainFragmentSwitch;
