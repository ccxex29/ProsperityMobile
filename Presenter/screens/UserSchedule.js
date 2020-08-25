import React from 'react';
import { StatusBar, SafeAreaView, ScrollView } from 'react-native';
import PageSafe from '../components/Compatibility/PageSafe';
import CommonListHeaderParallax from '../components/CommonList/CommonListHeaderParallax';
import ScheduleListBody from '../components/UserSchedule/ScheduleListBody';
import MainScreenHeader from '../components/CommonList/MainScreenHeader';
import MainFragmentSwitch from '../components/CommonList/MainFragmentSwitch';

const UserSchedule = () => {
    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent />
            <SafeAreaView style={ PageSafe.StatusBarSafePage }>
                <MainScreenHeader />
                <CommonListHeaderParallax headerIsMain={true} headerTitle={'Schedule'} />
                <ScheduleListBody />
                <MainFragmentSwitch />
            </SafeAreaView>
        </>
    );
};

export default UserSchedule;
