import React, { useState } from 'react';
import { TouchableOpacity, View, ImageBackground, Text, Keyboard, SafeAreaView, StatusBar } from 'react-native';
import AppHeader from '../../components/AppHeader';
import { colors, fullWidth, scale, scaleFont, verticalScale, constants } from '../../utils';
import { Colors, TextInput } from 'react-native-paper';
import OtpInputs from 'react-native-otp-inputs';




const OtpVerification = (props) => {

    const [code, setcode] = useState()

    const handlecodeChange = (text) => {
        setcode(text)
    }


    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
                />
                <View style={{ marginTop: verticalScale(30) }}>


                    <AppHeader heading="" navigation={() => props.navigation.goBack()} showicon={true} />
                </View>


                <Text style={{ color: colors.black, fontSize: scaleFont(22), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginHorizontal: scale(20) }}>Verify Mobile Number</Text>
                <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginHorizontal: scale(20) }}>
                    We've send you a code to verify your phone {props.route.params.param}. <Text onPress={() => console.log("pressssdsd")} style={{ alignSelf: 'center', color: colors.primary_blue, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, }}>Change</Text> </Text>



                <View style={{ flex: 1, alignSelf: 'center', marginTop: verticalScale(10), marginHorizontal: scale(14) }}>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: scale(340), marginTop: verticalScale(20) }}>
                        <OtpInputs
                            handleChange={code => {
                                console.log(code)
                                if (code.length == 4) {
                                    Keyboard.dismiss()
                                    setTimeout(() => {
                                        props.navigation.navigate('BottomTab')

                                    }, 50)
                                }
                            }}
                            numberOfInputs={4}
                            autoFocus
                            inputStyles={{
                                borderColor: colors.primary_blue,
                                borderWidth: 1,
                                borderRadius: verticalScale(3),
                                marginHorizontal: scale(10),
                                width: scale(55),
                                height: verticalScale(55),
                                textAlign: 'center',
                                color: 'black',
                                fontSize: scaleFont(22),
                                backgroundColor: '#f5f7fb',
                            }}

                            style={{

                                paddingHorizontal: scale(30),
                                width: scale(340),
                                flexDirection: 'row',
                            }}
                            secureTextEntry={true}
                            keyboardType="numeric"
                            onSubmitEditing={() => props.navigation.navigate('BottomTab')}
                        />


                    </View>

                    <View style={{ position: 'absolute', bottom: verticalScale(20), left: scale(10) }}>
                        <Text style={{ alignSelf: 'center', color: colors.black, fontSize: scaleFont(14), marginTop: verticalScale(14), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>Didn't receive a code!</Text>
                        <TouchableOpacity style={{ marginTop: verticalScale(0) }} ><Text style={{ color: colors.primary_blue, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, }}>Resend</Text></TouchableOpacity>
                    </View>

                </View>
            </TouchableOpacity>
        </View >
    );
}

export default OtpVerification;