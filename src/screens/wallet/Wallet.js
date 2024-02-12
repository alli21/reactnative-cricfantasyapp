import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, Modal, Keyboard } from 'react-native';
import { colors, scaleFont, scale, verticalScale, constants, fullWidth, fullHeight } from '../../utils';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from 'react-native-linear-gradient';
import Ionicon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from 'react-native-paper';


const Wallet = (props) => {

    const [couponModalVisible, setCouponModalVisible] = useState(false)
    const [couponValue, setCouponValue] = useState('')

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>

            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true} />

            {
                //Make Backdrop
                couponModalVisible && (
                    <View
                        style={{
                            height: fullHeight,
                            width: fullWidth,
                            backgroundColor: "rgba(0,0,0,0.2)",
                            position: 'absolute',
                            zIndex: 1
                        }}
                    >
                        <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true} />
                    </View>
                )
            }

            <Modal
                animationType="slide"
                onRequestClose={() => { setCouponModalVisible(false) }}
                transparent={true}
                visible={couponModalVisible}
            >
                <TouchableOpacity activeOpacity={1} onPress={() => { Keyboard.dismiss() }} style={{ backgroundColor: "white", width: fullWidth, height: verticalScale(230), position: 'absolute', bottom: 0, borderTopLeftRadius: verticalScale(20), borderTopRightRadius: verticalScale(20) }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: verticalScale(15), width: scale(330), alignSelf: "center" }}>
                        <TouchableOpacity onPress={() => setCouponModalVisible(false)}>
                            <MaterialCommunityIcons name="close" size={verticalScale(24)} color={colors.black} />
                        </TouchableOpacity>
                        <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16), marginLeft: scale(65) }}>Enter Coupon Code</Text>
                    </View>

                    <TextInput
                        style={{ width: scale(330), alignSelf: "center", marginTop: verticalScale(20), backgroundColor: "transparent" }}
                        label="Enter Your Code Here"
                        underlineColor={colors.primary_blue}
                        activeUnderlineColor={colors.primary_blue}
                        value={couponValue}
                        onChangeText={(text) => { setCouponValue(text) }}
                    />
                    <TouchableOpacity onPress={() => setCouponModalVisible(false)} style={{ width: scale(330), justifyContent: "center", alignItems: "center", height: verticalScale(40), backgroundColor: couponValue.length > 4 ? colors.secondary_blue : '#868686', marginTop: verticalScale(30), alignSelf: "center", borderRadius: verticalScale(6) }} >
                        <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>Apply Now</Text>
                    </TouchableOpacity>

                </TouchableOpacity>
            </Modal>


            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{
                    width: scale(360),
                    height: verticalScale(330),
                    alignSelf: 'center',
                }}>
                <View style={{ marginTop: verticalScale(40), paddingHorizontal: scale(20), alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(40), marginTop: verticalScale(30) }}>{'\u20B9'} 5600</Text>
                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>Total Wallet Balance</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('AddMoney') }} style={{ width: scale(120), height: verticalScale(36), borderRadius: verticalScale(20), marginTop: verticalScale(10), backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', elevation: 1 }} >
                        <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12) }} >Add Money</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: verticalScale(20), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: scale(340), alignSelf: 'center' }} >
                        <TouchableOpacity style={{ width: scale(100), height: verticalScale(110), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                            <FontAwesome name="bank" color={colors.green} size={verticalScale(20)} />
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(20), marginTop: verticalScale(15) }}>{'\u20B9'}4000</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), }}>Deposited</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: scale(100), height: verticalScale(110), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                            <Image source={require('../../assets/images/ruppeeIcon.jpeg')} style={{ width: scale(24), height: scale(24), }} />
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(20), marginTop: verticalScale(12) }}>{'\u20B9'}1200</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), }}>Cash Bonus</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: scale(100), height: verticalScale(110), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                            <FontAwesome name="trophy" color={colors.primary_blue} size={verticalScale(20)} />
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(20), marginTop: verticalScale(15) }}>{'\u20B9'}400</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), }}>Winnings</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

            <ScrollView style={{ marginLeft: scale(10), }} showsVerticalScrollIndicator={false} overScrollMode="never" >

                <TouchableOpacity onPress={() => props.navigation.navigate('WithdrawMoney')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <MaterialCommunityIcons name="bank-transfer-out" color={colors.primary_blue} size={verticalScale(30)} />
                    <View style={{ flexDirection: 'row', borderBottomWidth: verticalScale(0.25), borderColor: colors.greyColour, width: scale(320), justifyContent: "space-between", alignItems: 'center', paddingHorizontal: scale(10), height: verticalScale(60), }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Withdraw Money</Text>
                        <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { setCouponModalVisible(true) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Ionicon name="barcode" color={colors.primary_blue} size={verticalScale(24)} />
                    <View style={{ flexDirection: 'row', borderBottomWidth: verticalScale(0.25), borderColor: colors.greyColour, width: scale(320), justifyContent: "space-between", alignItems: 'center', paddingHorizontal: scale(10), height: verticalScale(60), }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Redeem Coupon</Text>
                        <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />
                    </View>
                </TouchableOpacity>


                {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <MaterialIcons name="redeem" color={colors.primary_blue} size={verticalScale(24)} />
                    <View style={{ flexDirection: 'row', borderBottomWidth: verticalScale(0.25), borderColor: colors.greyColour, width: scale(320), justifyContent: "space-between", alignItems: 'center', paddingHorizontal: scale(10), height: verticalScale(60), }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Offers</Text>
                        <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />
                    </View>
                </View> */}


                <TouchableOpacity onPress={() => { props.navigation.navigate('Refer') }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <FontAwesome name="rupee" color={colors.primary_blue} size={verticalScale(20)} style={{ marginLeft: scale(8) }} />
                    <View style={{ flexDirection: 'row', borderBottomWidth: verticalScale(0.25), borderColor: colors.greyColour, width: scale(320), justifyContent: "space-between", alignItems: 'center', paddingHorizontal: scale(10), height: verticalScale(60), }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Earn Cash Bonus</Text>
                        <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => { props.navigation.navigate('TransactionHistory') }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <MaterialCommunityIcons name="history" color={colors.primary_blue} size={verticalScale(24)} />
                    <View style={{ flexDirection: 'row', borderBottomWidth: verticalScale(0.25), borderColor: colors.greyColour, width: scale(320), justifyContent: "space-between", alignItems: 'center', paddingHorizontal: scale(10), height: verticalScale(60), }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Transaction History</Text>
                        <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { props.navigation.navigate('Support') }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <MaterialIcons name="help-outline" color={colors.primary_blue} size={verticalScale(24)} />
                    <View style={{ flexDirection: 'row', borderBottomWidth: verticalScale(0.25), borderColor: colors.greyColour, width: scale(320), justifyContent: "space-between", alignItems: 'center', paddingHorizontal: scale(10), height: verticalScale(60), }}>
                        <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>Help</Text>
                        <FontAwesome name="angle-right" color={colors.black} size={verticalScale(18)} />
                    </View>
                </TouchableOpacity>

            </ScrollView>



        </View>

    );
}

export default Wallet;