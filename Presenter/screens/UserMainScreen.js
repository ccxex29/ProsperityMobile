import React, { useState } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import PageSafe from '../components/Compatibility/PageSafe';
import CommonListHeaderParallax from '../components/CommonList/CommonListHeaderParallax';
import ScheduleListBody from '../components/UserSchedule/ScheduleListBody';
import MainScreenHeader from '../components/CommonList/MainScreenHeader';
import MainFragmentSwitch from '../components/CommonList/MainFragmentSwitch';
import CommonListBodyScrollable from '../components/CommonList/CommonListBodyScrollable';

const UserMainScreen = () => {
    const [ mainScreenFragmentSel, setMainScreenFragmentSel ] = useState('schedule');
    const changeMainScreenHandler = fragmentName => {
        setMainScreenFragmentSel(fragmentName);
    };
    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent />
            <SafeAreaView style={ PageSafe.StatusBarSafePage }>
                <MainScreenHeader />
                {
                    mainScreenFragmentSel === 'schedule' ?
                        <View style={{ flex:1 }}>
                            <CommonListHeaderParallax headerIsMain={true} headerTitle={'Schedule'} />
                            <ScheduleListBody />
                        </View>
                    :
                        <View style={{ flex: 1 }}>
                            <CommonListHeaderParallax headerIsMain={true} headerTitle={'Finance'} />
                            <CommonListBodyScrollable />
                        </View>
                }
                <MainFragmentSwitch setter={ changeMainScreenHandler } state={ mainScreenFragmentSel } />
            </SafeAreaView>
        </>
    );
};

export default UserMainScreen;
