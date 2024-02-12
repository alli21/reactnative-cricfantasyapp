import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, Text, TouchableOpacity, Image, Modal, Switch } from 'react-native';
import AppHeader from '../../components/AppHeader';
import { colors, verticalScale, scale, scaleFont, constants } from '../../utils';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Entypo";
import { useSelector, useDispatch } from 'react-redux';
import { switchColors } from '../../redux/actions';
import { LIGHT_THEME, DARK_THEME } from '../../utils/colors'
import { English } from '../../utils/lang';
import LinearGradient from 'react-native-linear-gradient';




const AddMoney = (props) => {

    const [money, setmoney] = useState(1500)

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
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
                    <TouchableOpacity style={{ width: scale(134), paddingHorizontal: scale(20), }} onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white }}>Add Money</Text>
                </View>
            </LinearGradient>

            <View style={{ flex: 1, backgroundColor: "#f5f7fb" }}>


                <View style={{ width: scale(360), paddingHorizontal: scale(20), justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', backgroundColor: colors.white, height: verticalScale(30) }}>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }}>
                        Total available balance</Text>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }}>
                        {'\u20B9'}106</Text>
                </View>




                <Text style={{ alignSelf: 'center', color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14), marginTop: verticalScale(60) }}>
                    Enter amount to add
                </Text>
                <Text style={{ alignSelf: 'center', color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(45), }}>
                    {'\u20B9'}{money}
                </Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: scale(360), marginTop: verticalScale(30) }}>
                    <TouchableOpacity onPress={() => setmoney(500)} activeOpacity={0.7} style={{ backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: verticalScale(6), width: scale(100), height: verticalScale(40) }}>
                        <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14), }}>
                            {'\u20B9'}500
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setmoney(1000)} activeOpacity={0.7} style={{ backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: verticalScale(6), width: scale(100), height: verticalScale(40) }}>
                        <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14), }}>
                            {'\u20B9'}1000
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setmoney(2000)} activeOpacity={0.7} style={{ backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', borderRadius: verticalScale(6), width: scale(100), height: verticalScale(40) }}>
                        <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14), }}>
                            {'\u20B9'}2000
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate("PaymentOptions", { money: money })} style={{ backgroundColor: colors.primary_blue, width: scale(320), height: verticalScale(40), alignSelf: 'center', borderRadius: verticalScale(6), justifyContent: 'center', alignItems: 'center', marginTop: verticalScale(20) }}>
                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14) }} >Add {'\u20B9'}{money}</Text>
                </TouchableOpacity>



                <View style={{ backgroundColor: colors.white, borderRadius: verticalScale(12), width: scale(320), height: verticalScale(200), alignSelf: 'center', marginTop: verticalScale(20), paddingHorizontal: scale(15) }}>
                    <Text style={{ color: colors.primary_red, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginTop: verticalScale(20) }} >Cash Bonus Is On!</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: verticalScale(5) }}>
                        <View style={{ width: scale(140) }}>
                            <Text style={{ color: colors.greyColour, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>
                                ADD MONEY</Text>
                        </View>
                        <View style={{ width: scale(140) }}>
                            <Text style={{ color: colors.greyColour, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>
                                YOU WILL GET
                            </Text>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: verticalScale(10) }}>
                        <View style={{ width: scale(140) }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                {'\u20B9'}500</Text>
                        </View>
                        <View style={{ width: scale(140) }}>
                            <Text style={{ color: colors.black, textAlign: 'left', fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                {'\u20B9'}699
                            </Text>
                        </View>
                    </View>

                    <View style={{ width: scale(300), height: verticalScale(2), alignSelf: 'center', backgroundColor: "#f5f7fb", marginVertical: verticalScale(15) }}>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <View style={{ width: scale(140) }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                {'\u20B9'}1000</Text>
                        </View>
                        <View style={{ width: scale(140) }}>
                            <Text style={{ color: colors.black, textAlign: 'left', fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                {'\u20B9'}1499
                            </Text>
                        </View>
                    </View>

                    <View style={{ width: scale(300), height: verticalScale(2), alignSelf: 'center', backgroundColor: "#f5f7fb", marginVertical: verticalScale(15) }}>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <View style={{ width: scale(140) }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                {'\u20B9'}2000</Text>
                        </View>
                        <View style={{ width: scale(140) }}>
                            <Text style={{ color: colors.black, textAlign: 'left', fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                {'\u20B9'}3199
                            </Text>
                        </View>
                    </View>

                </View>



            </View>
        </View>
    );
}

export default AddMoney;