import React from 'react';
import { View, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import { colors, verticalScale, scale, scaleFont, constants } from '../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from 'react-native-linear-gradient';

const Refer = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{
                    width: scale(365),
                    height: verticalScale(80),
                    alignSelf: 'center',
                }}>
                <View style={{ alignSelf: 'center', width: scale(365), marginTop: verticalScale(40), flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{ width: scale(124), paddingHorizontal: scale(20), }} onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white }}>Refer & Earn</Text>
                </View>
            </LinearGradient>

            <Image source={require("../../assets/images/refer-earn.png")} style={{ width: scale(320), height: scale(190), marginTop: verticalScale(35), alignSelf: 'center' }} />


            <View style={{ flex: 1, backgroundColor: colors.background_secondary }}>



                <View style={{ backgroundColor: colors.white, borderRadius: verticalScale(6), width: scale(320), height: verticalScale(100), marginTop: verticalScale(20), alignSelf: 'center', alignItems: 'center', justifyContent: "space-evenly", paddingBottom: verticalScale(20) }}>
                    <Text style={{ color: colors.greyColour, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }}>Your referral code</Text>
                    <View style={{ width: scale(290), height: verticalScale(40), alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: verticalScale(35), borderWidth: verticalScale(0.4), borderColor: colors.greyColour, paddingHorizontal: scale(15) }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_EXTRA_BOLD }}>aBcDeFgH</Text>
                        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: scale(80) }}>
                            <Text style={{ color: colors.greyColour, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>Tap to Copy</Text>
                            <MaterialCommunityIcons
                                name="content-copy"
                                size={verticalScale(12)}
                                color={colors.greyColour}
                            />
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{ justifyContent: "center", alignItems: 'center', marginTop: verticalScale(20) }}>
                    <Text style={{ color: colors.greyColour, fontSize: scaleFont(16), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>Invite by Social Media</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: scale(150), marginTop: verticalScale(10) }}>
                        <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../../assets/images/wsicon.png")} style={{ width: verticalScale(35), height: verticalScale(35), borderRadius: verticalScale(35) }} />

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../../assets/images/tgicon.png")} style={{ width: verticalScale(35), height: verticalScale(35), borderRadius: verticalScale(35) }} />

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../../assets/images/igicon.png")} style={{ width: verticalScale(35), height: verticalScale(35), borderRadius: verticalScale(35) }} />

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons
                                name="share-variant"
                                size={verticalScale(30)}
                                color={colors.greyColour}
                            />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </View>
    );
}

export default Refer;