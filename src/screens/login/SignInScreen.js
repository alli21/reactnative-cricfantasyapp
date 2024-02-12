import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity, SafeAreaView, StatusBar, Keyboard, ScrollView } from 'react-native';
import { colors, fullWidth, scale, scaleFont, verticalScale, constants } from '../../utils';
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AppHeader from '../../components/AppHeader';

const SignInScreen = (props) => {

    const [phoneNumber, sethoneNumber] = useState();
    const [name, setname] = useState();
    const [email, setemail] = useState();

    const handlenameChange = (text) => {
        setname(text)
    }
    const handleemailChange = (text) => {
        setemail(text)
    }
    const handlePhoneChange = (text) => {
        sethoneNumber(text)
    }



    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
                />
                <View style={{ marginTop: verticalScale(30) }}>


                    <AppHeader heading="" navigation={() => props.navigation.goBack()} showicon={true} />
                </View>
                <View style={{ flex: 1 }}>

                    <Text style={{ color: colors.black, fontSize: scaleFont(18), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(20), marginTop: verticalScale(10) }}>Login to continue</Text>

                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Mobile No."
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black, marginTop: verticalScale(20) }}
                        keyboardType="number-pad"
                        autoCapitalize='none'
                        onChangeText={(text) => handlePhoneChange(text)}
                        value={phoneNumber}
                        maxLength={10}
                    />



                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Password"
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black, }}
                        keyboardType='default'
                        onChangeText={(text) => handlenameChange(text)}
                        value={name}
                        maxLength={15}
                        secureTextEntry={true}
                    />




                    <TouchableOpacity onPress={() => props.navigation.navigate('BottomTab')} style={{ backgroundColor: colors.primary_blue, height: verticalScale(50), width: verticalScale(50), marginLeft: scale(20), borderRadius: verticalScale(100), marginTop: verticalScale(24), justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name="arrow-right"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>

                    <View style={{ position: 'absolute', bottom: verticalScale(20), alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignupScreen")} style={{ justifyContent: 'center', alignItems: "center", marginTop: verticalScale(14) }} ><Text style={{ alignSelf: 'center', color: colors.primary_blue, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, }}>Sign Up   </Text></TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: "center", marginTop: verticalScale(14) }} ><Text style={{ alignSelf: 'center', color: colors.primary_blue, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, }}> Forgot Password </Text></TouchableOpacity>
                    </View>
                    {/* 
                    <TouchableOpacity onPress={() => props.navigation.navigate('PrivacyPolicy')} ><Text style={{ alignSelf: 'center', color: colors.primary_red, fontSize: scaleFont(12), marginTop: verticalScale(4), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>Terms & Conditions</Text>
                    </TouchableOpacity> */}
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default SignInScreen;