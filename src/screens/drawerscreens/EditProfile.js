import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import AppHeader from '../../components/AppHeader';
import { colors, verticalScale, scale, scaleFont, constants } from '../../utils';
import { TextInput } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from 'react-redux';


const EditProfile = (props) => {
    const theme = useSelector(state => state.theme)

    const [phoneNumber, sethoneNumber] = useState("912345678");
    const [name, setname] = useState("Mark Jhonson");
    const [email, setemail] = useState("markjhonson@email.com");
    const [disable, setdisable] = useState(true)

    const handlenameChange = (text) => {
        setdisable(false)
        setname(text)
    }
    const handleemailChange = (text) => {
        setdisable(false)
        setemail(text)
    }
    const handlePhoneChange = (text) => {
        setdisable(false)
        sethoneNumber(text)
    }


    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background_primary }}>
            <SafeAreaView />
            <StatusBar barStyle={theme.colors.statusbar_content} backgroundColor={theme.colors.background_primary} hidden={false} translucent={false}
            />
            <AppHeader heading="My Profile" navigation={() => props.navigation.goBack()} showicon={true} />
            <Image source={require("../../assets/images/John-Doe.jpeg")} style={{ height: verticalScale(100), width: verticalScale(100), borderRadius: verticalScale(50), alignSelf: 'center', marginTop: verticalScale(60) }} />
            <TouchableOpacity style={{ position: 'absolute', top: verticalScale(190), left: scale(206), zIndex: 1 }}>
                <MaterialIcons name="photo-camera" color={colors.green} size={verticalScale(22)} />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
                <ScrollView style={{}}>
                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: theme.colors.text_primary, accent: "#ffffff", primary: "#a3d1ff", placeholder: theme.colors.text_primary, background: "transparent" } }}
                        underlineColor={colors.green}
                        selectionColor={colors.green}
                        activeUnderlineColor={colors.green}
                        label="Full Name"
                        style={{ height: verticalScale(60), width: scale(270), marginHorizontal: verticalScale(5), alignSelf: 'center', color: colors.black, marginTop: verticalScale(10) }}
                        keyboardType='default'
                        onChangeText={(text) => handlenameChange(text)}
                        value={name}
                        maxLength={15}
                    />


                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: theme.colors.text_primary, accent: "#ffffff", primary: "#a3d1ff", placeholder: theme.colors.text_primary, background: "transparent", } }}
                        underlineColor={colors.green}
                        selectionColor={colors.green}
                        activeUnderlineColor={colors.green}
                        autoCapitalize="none"
                        autoCorrect={false}
                        label="Email Address"
                        style={{ height: verticalScale(60), width: scale(270), alignSelf: 'center', marginVertical: verticalScale(5), color: colors.white, }}
                        keyboardType="email-address"
                        onChangeText={(text) => handleemailChange(text)}
                        value={email}
                        maxLength={25}
                    />

                    <TextInput
                        mode="flat"
                        theme={{ colors: { text: theme.colors.text_primary, accent: "#ffffff", primary: "#a3d1ff", placeholder: theme.colors.text_primary, background: "transparent" } }}
                        underlineColor={colors.green}
                        selectionColor={colors.green}
                        activeUnderlineColor={colors.green}
                        label="Phone Number"
                        style={{ height: verticalScale(60), width: scale(270), alignSelf: 'center', marginVertical: verticalScale(5), color: colors.white }}
                        keyboardType="number-pad"
                        autoCapitalize='none'
                        onChangeText={(text) => handlePhoneChange(text)}
                        value={phoneNumber}
                        maxLength={10}
                    />

                    <TouchableOpacity disabled={disable} onPress={() => props.navigation.navigate("Profile")} style={{ backgroundColor: disable ? colors.greyColour : colors.green, height: verticalScale(40), width: scale(280), alignSelf: 'center', borderRadius: verticalScale(20), marginTop: verticalScale(24), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: scaleFont(16), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Save</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    );
}

export default EditProfile;