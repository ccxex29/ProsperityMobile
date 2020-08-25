import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import PageSafe from '../components/Compatibility/PageSafe';
import HeaderTerm from '../components/UserTerm/HeaderTerm';
import CommonListHeaderParallax from '../components/CommonList/CommonListHeaderParallax';
import CourseListBody from '../components/UserTerm/CourseListBody';

const UserTerm = () => {
    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent />
            <SafeAreaView style={ PageSafe.StatusBarSafePage }>
                <HeaderTerm />
                <CommonListHeaderParallax headerIsMain={false} headerTitle={'Terms'} />
                <CourseListBody />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
});

export default UserTerm;
