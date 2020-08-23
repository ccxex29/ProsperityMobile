import React from 'react';
import { View, ScrollView, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import HeaderProfile from '../components/UserProfile/HeaderProfile';
import PageSafe from '../components/Compatibility/PageSafe';
import UserMainCard from '../components/UserProfile/UserMainCard';
import UserMisc from '../components/UserProfile/UserMisc';

const UserProfile = () => {
    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent />
            <SafeAreaView style={ PageSafe.StatusBarSafePage }>
                <View style={ styles.profilePage }>
                    <HeaderProfile />
                    <ScrollView>
                        <UserMainCard style={ styles.userCard } />
                        <UserMisc />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    profilePage: {
        flexDirection: 'column',
        backgroundColor: '#007388',
        flex: 1,
    },
    userCard: {
        marginBottom: 24,
    },
});

export default UserProfile;
