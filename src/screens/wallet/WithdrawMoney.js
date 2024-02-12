import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, Keyboard } from 'react-native';
import { colors, verticalScale, scale, scaleFont, constants } from '../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';

const WithdrawMoney = (props) => {

    const [amountValue, setAmountValue] = useState('')

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableOpacity activeOpacity={1} onPress={() => { Keyboard.dismiss() }} style={{ flex: 1 }}>

                <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
                />

                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                    colors={[colors.secondary_blue, colors.primary_blue]}
                    style={{
                        width: scale(365),
                        height: verticalScale(160),
                        alignSelf: 'center',
                    }}>
                    <View>
                        <View style={{ alignSelf: 'center', width: scale(365), marginTop: verticalScale(40), flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ paddingHorizontal: scale(20) }} onPress={() => { props.navigation.goBack() }} >
                                <MaterialCommunityIcons
                                    name="arrow-left"
                                    size={verticalScale(26)}
                                    color={colors.white}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white, marginLeft: scale(50) }}>Withdraw Money</Text>
                        </View>
                        <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_BOLD, fontSize: scaleFont(30), marginTop: verticalScale(20), textAlign: "center" }}>{'\u20B9'} 1900</Text>
                        <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12), textAlign: "center" }}>Withdrawable Balance</Text>
                    </View>
                </LinearGradient>

                <TextInput
                    style={{ alignSelf: "center", width: scale(320), marginTop: verticalScale(20) }}
                    label={"\u20B9 Enter amount to Withdraw"}
                    activeUnderlineColor={colors.primary_blue}
                    value={amountValue}
                    onChangeText={(text) => setAmountValue(text)}
                    keyboardType="number-pad"

                />

                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ width: scale(330), justifyContent: "center", alignItems: "center", height: verticalScale(40), backgroundColor: amountValue.length > 3 ? colors.secondary_blue : '#868686', marginTop: verticalScale(330), alignSelf: "center", borderRadius: verticalScale(6), position: "absolute", bottom: 30 }} >
                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>Withdraw Money</Text>
                </TouchableOpacity>


            </TouchableOpacity>
        </View>
    );
}

export default WithdrawMoney;