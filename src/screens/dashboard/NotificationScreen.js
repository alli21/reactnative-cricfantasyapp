import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, } from 'react-native';
import { colors, fullWidth, scale, scaleFont, verticalScale, constants } from '../../utils';
import CustomSlider from '../../containers/Carousel/CustomSlider'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { matchdata, bannercarouseldata } from '../../utils/Data';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



const NotificationScreen = (props) => {



    const todaysNotification = [
        { "title": " You have 100% discount available, click now to avail ", "time": "2 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },

    ]

    const yesterdaysNotification = [
        { "title": " You have 100% discount available, click now to avail ", "time": "2 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },
        { "title": " You have a chance to get 50 bonus in you wallet, click to avail now ", "time": "21 min" },

    ]


    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: verticalScale(30), width: scale(360), height: verticalScale(48), alignSelf: "center", borderBottomColor: '#f5f7fb', borderBottomWidth: verticalScale(2) }}>
                <TouchableOpacity style={{ width: scale(60), justifyContent: "center", alignItems: "center" }} onPress={() => props.navigation.goBack()}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={verticalScale(26)}
                        color={colors.black}
                    />
                </TouchableOpacity>
                <Text style={{ width: scale(240), textAlign: "center", color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18) }}>Notifications</Text>
                <TouchableOpacity style={{ width: scale(70), }} onPress={() => props.navigation.goBack()}>
                    <Text style={{ color: colors.primary_blue, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>CLEAR ALL</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>


                <View style={{ width: scale(360), marginTop: verticalScale(25), }}>
                    <Text style={{ color: colors.greyColour, fontSize: scaleFont(12), marginLeft: scale(20), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>TODAY</Text>

                    <FlatList
                        data={todaysNotification}
                        style={{ marginTop: verticalScale(10) }}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center", width: scale(360), borderBottomColor: colors.greyColour, borderBottomWidth: verticalScale(0.5), paddingVertical: verticalScale(10), paddingHorizontal: scale(20) }}>

                                    <MaterialCommunityIcons name="gift" size={verticalScale(20)} color={colors.greyColour} />

                                    <View style={{ marginLeft: scale(20) }}>
                                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12), }} >{item.title}</Text>
                                        <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(10) }} >{item.time}</Text>
                                    </View>

                                </View>
                            )
                        }}
                    />

                </View>

                <View style={{ width: scale(360), marginTop: verticalScale(25), paddingBottom: scale(50) }}>
                    <Text style={{ color: colors.greyColour, fontSize: scaleFont(12), marginLeft: scale(20), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>YESTERDAY</Text>

                    <FlatList
                        data={yesterdaysNotification}
                        style={{ marginTop: verticalScale(10) }}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: "row", alignItems: "center", width: scale(360), borderBottomColor: colors.greyColour, borderBottomWidth: verticalScale(0.5), paddingVertical: verticalScale(10), paddingHorizontal: scale(20) }}>

                                    <MaterialCommunityIcons name="gift" size={verticalScale(20)} color={colors.greyColour} />

                                    <View style={{ marginLeft: scale(20) }}>
                                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12), }} >{item.title}</Text>
                                        <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(10) }} >{item.time}</Text>
                                    </View>

                                </View>
                            )
                        }}
                    />

                </View>
            </ScrollView>


        </View>
    );
}

export default NotificationScreen;