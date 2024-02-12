import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { colors, verticalScale, scale, scaleFont, constants } from '../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from 'react-native-linear-gradient';


const TransactionHistory = (props) => {

    const [depositTab, setDepositTab] = useState(true)
    const [withdrawlTab, setWithdrawlTab] = useState(false)
    const [bonusTab, setBonusTab] = useState(false)
    const [winningsTab, setWinningsTab] = useState(false)

    const transactionList = [
        { 'heading': 'Deposit Amount', 'amount': '100', 'incoming': true, 'dateTime': '06 Jan 11:23am' },
        { 'heading': 'Joined a contest', 'amount': '50', 'incoming': false, 'dateTime': '06 Jan 11:23am' },
        { 'heading': 'Deposit Amount', 'amount': '100', 'incoming': true, 'dateTime': '06 Jan 11:23am' },
        { 'heading': 'Joined a contest', 'amount': '50', 'incoming': false, 'dateTime': '06 Jan 11:23am' },
        { 'heading': 'Joined a contest', 'amount': '50', 'incoming': false, 'dateTime': '06 Jan 11:23am' },
        { 'heading': 'Deposit Amount', 'amount': '100', 'incoming': true, 'dateTime': '06 Jan 11:23am' },
        { 'heading': 'Joined a contest', 'amount': '50', 'incoming': false, 'dateTime': '06 Jan 11:23am' },
        { 'heading': 'Deposit Amount', 'amount': '100', 'incoming': true, 'dateTime': '06 Jan 11:23am' },
        { 'heading': 'Deposit Amount', 'amount': '100', 'incoming': true, 'dateTime': '06 Jan 11:23am' },
    ]

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
                    <TouchableOpacity style={{ paddingHorizontal: scale(20) }} onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white, marginLeft: scale(44) }}>Transaction history</Text>
                </View>
            </LinearGradient>

            <View style={{ height: verticalScale(70) }} >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingTop: verticalScale(20), paddingHorizontal: scale(10), flexDirection: "row", }}>

                    <TouchableOpacity onPress={() => { setDepositTab(true), setWithdrawlTab(false), setBonusTab(false), setWinningsTab(false) }} style={{ height: verticalScale(30), borderRadius: verticalScale(20), justifyContent: "center", alignItems: "center", backgroundColor: depositTab ? colors.primary_blue : colors.background_secondary, marginHorizontal: scale(8) }}>
                        <Text style={{ color: depositTab ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), paddingHorizontal: scale(22) }}>Deposit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setDepositTab(false), setWithdrawlTab(true), setBonusTab(false), setWinningsTab(false) }} style={{ height: verticalScale(30), borderRadius: verticalScale(20), justifyContent: "center", alignItems: "center", backgroundColor: withdrawlTab ? colors.primary_blue : colors.background_secondary, marginHorizontal: scale(8) }}>
                        <Text style={{ color: withdrawlTab ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), paddingHorizontal: scale(22) }}>Withdrawl</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setDepositTab(false), setWithdrawlTab(false), setBonusTab(true), setWinningsTab(false) }} style={{ height: verticalScale(30), borderRadius: verticalScale(20), justifyContent: "center", alignItems: "center", backgroundColor: bonusTab ? colors.primary_blue : colors.background_secondary, marginHorizontal: scale(8) }}>
                        <Text style={{ color: bonusTab ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), paddingHorizontal: scale(22) }}>Bonus</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setDepositTab(false), setWithdrawlTab(false), setBonusTab(false), setWinningsTab(true) }} style={{ height: verticalScale(30), borderRadius: verticalScale(20), justifyContent: "center", alignItems: "center", backgroundColor: winningsTab ? colors.primary_blue : colors.background_secondary, marginHorizontal: scale(8) }}>
                        <Text style={{ color: winningsTab ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), paddingHorizontal: scale(22) }}>Winnings</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            <View style={{ flex: 1, }}>
                <FlatList
                    data={transactionList}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ width: scale(320), height: verticalScale(70), marginTop: verticalScale(10), paddingVertical: verticalScale(10), alignSelf: "center", justifyContent: "space-around", borderBottomWidth: verticalScale(0.2), borderBottomColor: colors.text_primary }}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }} >{item.heading}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: item.incoming ? colors.green : colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }} >{item.incoming ? '+' : '-'} {'\u20B9'}{item.amount}</Text>
                                    </View>
                                </View>
                                <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>{item.dateTime}</Text>
                            </View>
                        )
                    }}
                />

            </View>

            <TouchableOpacity onPress={() => { props.navigation.navigate('AddMoney') }} style={{ position: "absolute", width: scale(160), height: verticalScale(46), borderRadius: verticalScale(30), elevation: 5, justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: colors.white, bottom: verticalScale(50) }}>
                <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }}>Add Money</Text>
            </TouchableOpacity>


        </View>
    );
}

export default TransactionHistory;