import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, Text, TouchableOpacity, Image, Modal, Switch } from 'react-native';
import AppHeader from '../../components/AppHeader';
import { colors, verticalScale, scale, scaleFont, constants } from '../../utils';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector, useDispatch } from 'react-redux';
import { switchColors } from '../../redux/actions';
import { LIGHT_THEME, DARK_THEME } from '../../utils/colors'
import { English } from '../../utils/lang';
import LinearGradient from 'react-native-linear-gradient';

const PaymentOptions = (props) => {
    const [money, setmoney] = useState(props.route.params.money)
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false)

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
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white }}>Payment Options</Text>
                </View>
            </LinearGradient>


            <View style={{ flex: 1, backgroundColor: colors.background_secondary }}>


                <View style={{ width: scale(360), paddingHorizontal: scale(20), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: colors.white, height: verticalScale(30) }}>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }}>
                        Amount to be added</Text>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }}>
                        {'\u20B9'}{money}</Text>
                </View>



                <TouchableOpacity onPress={() => setConfirmationModalVisible(true)} activeOpacity={0.7} style={{ justifyContent: "space-between", backgroundColor: colors.white, borderRadius: verticalScale(6), alignItems: 'center', paddingHorizontal: scale(20), width: scale(320), alignSelf: 'center', height: verticalScale(50), flexDirection: "row", marginVertical: verticalScale(15) }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Icon
                            name="card"
                            color={colors.primary_blue}
                            size={verticalScale(20)}
                        />
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14), marginLeft: scale(16) }}>
                            Add Debit/Credit Cards
                        </Text>
                    </View>
                    <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />

                </TouchableOpacity>


                <Text style={{ color: colors.greyColour, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(12), marginLeft: scale(20), marginTop: verticalScale(40) }}>
                    MORE OPTIONS
                </Text>

                <TouchableOpacity onPress={() => setConfirmationModalVisible(true)} activeOpacity={0.7} style={{ justifyContent: "space-between", backgroundColor: colors.white, borderRadius: verticalScale(6), alignItems: 'center', paddingHorizontal: scale(20), width: scale(320), alignSelf: 'center', height: verticalScale(50), flexDirection: "row", marginTop: verticalScale(20) }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <MaterialCommunityIcons
                            name="wallet"
                            color={colors.primary_blue}
                            size={verticalScale(20)}
                        />
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14), marginLeft: scale(16) }}>
                            Wallets
                        </Text>
                    </View>
                    <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => setConfirmationModalVisible(true)} activeOpacity={0.7} style={{ justifyContent: "space-between", backgroundColor: colors.white, borderRadius: verticalScale(6), alignItems: 'center', paddingHorizontal: scale(20), width: scale(320), alignSelf: 'center', height: verticalScale(50), flexDirection: "row", marginTop: verticalScale(4) }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <FontAwesome
                            name="paypal"
                            color={colors.primary_blue}
                            size={verticalScale(20)}
                        />
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14), marginLeft: scale(16) }}>
                            PayPal
                        </Text>
                    </View>
                    <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />

                </TouchableOpacity>


                <TouchableOpacity onPress={() => setConfirmationModalVisible(true)} activeOpacity={0.7} style={{ justifyContent: "space-between", backgroundColor: colors.white, borderRadius: verticalScale(6), alignItems: 'center', paddingHorizontal: scale(20), width: scale(320), alignSelf: 'center', height: verticalScale(50), flexDirection: "row", marginTop: verticalScale(4) }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <FontAwesome
                            name="laptop"
                            color={colors.primary_blue}
                            size={verticalScale(20)}
                        />
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14), marginLeft: scale(16) }}>
                            Net Banking
                        </Text>
                    </View>
                    <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />

                </TouchableOpacity>




                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', marginTop: verticalScale(200) }}>
                    <MaterialCommunityIcons
                        name="shield-lock"
                        color={colors.greyColour}
                        size={verticalScale(20)}
                    />
                    <Text style={{ color: colors.greyColour, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(10) }}>
                        Secured Payment
                    </Text>
                </View>


            </View>

            <Modal visible={confirmationModalVisible} >
                <TouchableOpacity activeOpacity={1} onPress={() => setConfirmationModalVisible(false)} style={{ flex: 1, alignItems: 'center', backgroundColor: "rgba(0,0,0,0.4)" }}>
                    <View style={{ backgroundColor: colors.white, height: verticalScale(360), width: scale(300), borderRadius: verticalScale(12), marginTop: verticalScale(100), elevation: 10 }}>
                        <View style={{ alignSelf: 'center', marginTop: verticalScale(30), justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="check-circle" color={colors.primary_blue} size={verticalScale(180)} />
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: verticalScale(10), paddingHorizontal: scale(25) }}>
                            <Text style={{ color: colors.text_primary, fontSize: scaleFont(20), fontFamily: constants.OPENSANS_FONT_BOLD, textAlign: 'center' }}>Hurray!</Text>
                            <Text style={{ color: colors.text_primary, fontSize: scaleFont(16), fontFamily: constants.OPENSANS_FONT_BOLD, textAlign: "center" }}>Payment Succesfull.</Text>
                            <Text style={{ color: colors.green, fontSize: scaleFont(18), fontFamily: constants.OPENSANS_FONT_BOLD, textAlign: 'center', marginTop: verticalScale(10) }}>{'\u20B9'}{money} has been added to your Wallet!</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { setConfirmationModalVisible(false) }} style={{ backgroundColor: colors.primary_blue, height: verticalScale(46), width: scale(220), justifyContent: 'center', alignItems: 'center', borderRadius: verticalScale(6), marginTop: verticalScale(80) }}>
                        <Text style={{ color: colors.white, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_BOLD }} >Back To Home</Text>
                    </TouchableOpacity>

                </TouchableOpacity>
            </Modal>

        </View>
    );
}

export default PaymentOptions;