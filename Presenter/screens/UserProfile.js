import React from 'react';
import { View, ScrollView, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import HeaderProfile from '../components/UserProfile/HeaderProfile';
import PageSafe from '../components/Compatibility/PageSafe';
import UserCard from '../components/UserProfile/UserCard';

const UserProfile = () => {
    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent />
            <SafeAreaView style={ PageSafe.StatusBarSafePage }>
                <View style={ styles.profilePage }>
                    <HeaderProfile />
                    <ScrollView>
                        <UserCard style={ styles.userCard } />
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
