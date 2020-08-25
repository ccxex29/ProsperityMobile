import React from 'react';
import { Picker } from '@react-native-community/picker';
import {ActionSheetIOS, Platform, Text, TouchableHighlight, View} from 'react-native';
import IconMaterial from 'react-native-vector-icons/dist/MaterialIcons';

const CrossPlatformPicker = props => {
    const iOSActionSheetHandler = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: [
                'Cancel',
                'Test 1',
                'Test 2',
            ],
            cancelButtonIndex: 0,
        });
    };
    return (
        <>
            {
                Platform.OS === 'ios' ?
                    (
                        <TouchableHighlight underlayColor={'rgba(0, 0, 0, .2)'} style={{ alignSelf: 'center', borderRadius: 20, }} onPress={ iOSActionSheetHandler }>
                            <View style={ props.containerStyle }>
                                <Text style={ props.textStyle }>2019/2020  ·  Odd Semester Term</Text>
                                <IconMaterial name={'keyboard-arrow-down'}
                                              color={'white'}
                                              size={13}
                                              style={{ marginTop: 3, marginLeft: 4 }} />
                            </View>
                        </TouchableHighlight>
                    ) : (
                        <TouchableHighlight underlayColor={'rgba(0, 0, 0, .2)'} style={{ alignSelf: 'center', borderRadius: 20, }} onPress={ () => {} }>
                            <View style={ props.containerStyle }>
                                <Text style={ props.textStyle }>2019/2020  ·  Odd Semester Term</Text>
                                <IconMaterial name={'keyboard-arrow-down'}
                                              color={'white'}
                                              size={13}
                                              style={{ marginTop: 3, marginLeft: 4 }} />
                            </View>
                        </TouchableHighlight>
                    )
            }
        </>
    );
};

export default CrossPlatformPicker;
