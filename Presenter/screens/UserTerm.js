import React from 'react';
import {View, ScrollView, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import IconMaterial from 'react-native-vector-icons/dist/MaterialIcons';
import PageSafe from '../components/Compatibility/PageSafe';
import HeaderTerm from '../components/UserTerm/HeaderTerm';
import CommonListBodyScrollable from '../components/CommonList/CommonListBodyScrollable';
import CommonListHeaderParallax from '../components/CommonList/CommonListHeaderParallax';

const UserTerm = () => {
    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent />
            <SafeAreaView style={ PageSafe.StatusBarSafePage }>
                <HeaderTerm  />
                <CommonListHeaderParallax headerIsTerm={true} headerTitle={'Terms'} />
                <CommonListBodyScrollable />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default UserTerm;
