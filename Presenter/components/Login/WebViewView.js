import React, { useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewView = props => {
    const getEmail = () => {
        return props.email;
    };
    const passwd = props.passwd;
    const jsInject = `
        const delay = async (time, fun) => {
            return new Promise(res => setTimeout(fun, time));
        };
        if (document.URL.includes('login.microsoftonline.com')) {
            if (document.URL.includes('login_hint')) {
                document.getElementById('i0118').value = '${passwd}';
                document.getElementById('i0281').submit();
            }
            else {
                document.getElementById('KmsiCheckboxField').checked = true;
                document.querySelectorAll('form[action="/kmsi"]')[0].submit();
            }
        }
    `;
    return (
        <View style={{flex: 1}}>
            <WebView
                source={{
                    uri: `https://studentmobilelogin.uph.technology/login/azure?email=${getEmail()}`,
                }}
                javaScriptEnabled={ true }
                injectedJavaScript={ jsInject }
            />
        </View>
    );
};

export default WebViewView;
