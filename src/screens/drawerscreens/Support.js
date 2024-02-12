import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scaleFont, verticalScale, scale, colors, constants } from "../../utils";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";


const Support = (props) => {

    const theme = useSelector(state => state.theme)
    const [number, setnumber] = useState(9876543210);
    const [email, setemail] = useState(`mailto:${"markjhonson@email.com"}`);


    const onPressMobileNumberClick = () => {

        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        } else {
            phoneNumber = `telprompt:${number}`;
        }

        Linking.openURL(phoneNumber);
    }


    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background_primary }}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{ width: scale(365), height: verticalScale(80), alignSelf: 'center', }}>
                <View style={{ alignSelf: 'center', width: scale(365), marginTop: verticalScale(40), flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{ width: scale(150), paddingHorizontal: scale(20), }} onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white }}>Support</Text>
                </View>
            </LinearGradient>

            <View style={{ marginTop: verticalScale(30), justifyContent: 'center', width: scale(320), alignSelf: 'center' }}>

                <View style={{ alignSelf: 'center' }}>
                    <FontAwesome5
                        name="trophy"
                        size={verticalScale(120)}
                        color={colors.primary_blue}
                    />
                </View>

                <Text style={{ fontSize: scaleFont(18), marginTop: verticalScale(20), marginBottom: verticalScale(10), textAlign: 'center', color: theme.colors.text_primary, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Connect With Us</Text>

                <View style={{ flexDirection: 'row', width: scale(280), justifyContent: 'space-between', alignSelf: 'center', marginTop: verticalScale(10) }}>
                    <TouchableOpacity
                        onPress={() => onPressMobileNumberClick()}
                        style={{ flexDirection: 'row', borderColor: colors.primary_blue, borderWidth: verticalScale(2), borderRadius: verticalScale(30), width: scale(120), height: verticalScale(40), alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                            name="call"
                            size={verticalScale(16)}
                            color={colors.primary_blue}
                        />
                        <Text style={{ fontSize: scaleFont(16), color: colors.primary_blue, marginLeft: scale(10) }}>Call us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(email)}
                        style={{ flexDirection: 'row', borderColor: colors.primary_blue, borderWidth: verticalScale(2), borderRadius: verticalScale(30), width: scale(120), height: verticalScale(40), alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                            name="md-mail-outline"
                            size={verticalScale(16)}
                            color={colors.primary_blue}
                        />
                        <Text style={{ fontSize: scaleFont(16), color: colors.primary_blue, marginLeft: scale(10) }}>Mail us</Text>
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <Text style={{ fontSize: scaleFont(18), marginBottom: verticalScale(5), marginTop: verticalScale(20), color: theme.colors.text_primary, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Address</Text>
                    <Text style={{ fontSize: scaleFont(14), color: theme.colors.text_primary, fontFamily: constants.OPENSANS_FONT_MEDIUM }}>
                        ABC Building INC.
                    </Text>
                    <Text style={{ fontSize: scaleFont(14), color: theme.colors.text_primary, fontFamily: constants.OPENSANS_FONT_MEDIUM }}>
                        123 Corportate Estate
                    </Text>
                    <Text style={{ fontSize: scaleFont(14), color: theme.colors.text_primary, fontFamily: constants.OPENSANS_FONT_MEDIUM }}>
                        XYZ Road
                    </Text>
                    <Text style={{ fontSize: scaleFont(14), color: theme.colors.text_primary, fontFamily: constants.OPENSANS_FONT_MEDIUM }}>
                        Tokyo - 121321
                    </Text>
                </View>

            </View>
        </View>
    )
}

export default Support
const styles = StyleSheet.create({
    image: {
        width: verticalScale(100),
        height: verticalScale(100)
    }
})



