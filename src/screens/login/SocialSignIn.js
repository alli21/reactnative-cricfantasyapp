import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Keyboard, Image, StatusBar } from 'react-native';
import AppHeader from '../../components/AppHeader';
import { colors, constants, fullWidth, scale, scaleFont, verticalScale } from '../../utils';
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



const SocialSignIn = (props) => {


    const [phoneNumber, sethoneNumber] = useState();

    const handleTextChange = (text) => {
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


                <Image source={require("../../assets/images/John-Doe.jpeg")} style={{ height: verticalScale(100), width: verticalScale(100), borderRadius: verticalScale(50), alignSelf: 'center', marginTop: verticalScale(10) }} />

                <View style={{ alignSelf: 'center', marginTop: verticalScale(30), width: scale(320) }}>
                    <Text style={{ color: colors.black, fontSize: scaleFont(18), fontFamily: constants.OPENSANS_FONT_BOLD }}>Hey, Jonn Doe.</Text>
                    <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginTop: verticalScale(20) }}>
                        You're Almost In
                    </Text>
                    <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, }}>
                        Kindly provide your phone number for Verification.
                    </Text>

                </View>

                <View style={{}}>
                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: "black", placeholder: colors.black, background: "transparent" } }}
                        underlineColor={'#CBD7EF'}
                        selectionColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        label="Mobile No."
                        style={{ height: verticalScale(60), width: scale(340), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black, }}
                        keyboardType="number-pad"
                        autoCapitalize='none'
                        onChangeText={(text) => handleTextChange(text)}
                        value={phoneNumber}
                        maxLength={10}
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate("OtpVerification", { param: phoneNumber })} style={{ backgroundColor: colors.primary_blue, height: verticalScale(50), width: verticalScale(50), marginLeft: scale(20), borderRadius: verticalScale(100), marginTop: verticalScale(14), justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name="arrow-right"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>

                </View>
            </TouchableOpacity>

        </View>
    );
}

export default SocialSignIn;