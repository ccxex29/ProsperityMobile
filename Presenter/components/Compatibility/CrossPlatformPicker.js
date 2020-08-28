import React from 'react';
import { Picker } from '@react-native-community/picker';
import { ActionSheetIOS, Platform, Text, TouchableHighlight, View } from 'react-native';
import IconMaterial from 'react-native-vector-icons/dist/MaterialIcons';
import { CustomPicker } from 'react-native-custom-picker';

const CrossPlatformPicker = props => {
    const testOptions = [
        'Cancel',
        'Test 1',
        'Test 2',
    ];
    const iOSActionSheetHandler = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: testOptions,
            cancelButtonIndex: 0,
        });
    };
    const PickerField = onPress => {
        return (
            <TouchableHighlight underlayColor={'rgba(0, 0, 0, .2)'} style={{ alignSelf: 'center', borderRadius: 20 }} onPress={ onPress }>
                <View style={ props.containerStyle }>
                    <Text style={ props.textStyle }>2019/2020  ·  Odd Semester Term</Text>
                    <IconMaterial name={'keyboard-arrow-down'}
                                  color={'white'}
                                  size={13}
                                  style={{ marginTop: 3, marginLeft: 4 }} />
                </View>
            </TouchableHighlight>
        );
    };
    return (
        <>
            {
                Platform.OS === 'ios' ?
                    (
                        PickerField(iOSActionSheetHandler)
                    ) : (
                        PickerField(() => {})
                    )
            }
        </>
    );
};

export default CrossPlatformPicker;
