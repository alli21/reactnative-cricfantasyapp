import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, Alert } from 'react-native';
import { colors, fullWidth, scale, scaleFont, verticalScale, constants } from '../../../utils';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TeamsList = (props) => {

    const playerList = props.route.params.playerList
    console.log("This is team in team select", playerList)
    const bowlerCount = props.route.params.bowlerCount;
    const batsmanCount = props.route.params.batsmanCount;
    const allRounderCount = props.route.params.allRounderCount;
    const keeperCount = props.route.params.keeperCount
    const [team1count, setteam1count] = useState(props.route.params.team1)
    const [team2count, setteam2count] = useState(props.route.params.team2)



    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <View style={{ marginTop: verticalScale(40), flexDirection: 'row', paddingHorizontal: scale(20), alignItems: 'center', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} >
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={verticalScale(26)}
                        color={colors.black}
                    />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: scale(220) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: scale(100), justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16) }} >IND</Text>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(10) }} >VS</Text>
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16) }}  >ENG</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialCommunityIcons
                            name="clock-alert-outline"
                            size={verticalScale(12)}
                            color={colors.primary_red}
                        />
                        <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(10) }} > 02h 32m 12s</Text>

                    </View>



                </View>

            </View>
            <View style={{ flex: 1, backgroundColor: '#f5f7fb' }}>

                <View style={{ backgroundColor: colors.white, width: scale(330), height: verticalScale(130), marginTop: verticalScale(20), alignSelf: 'center', borderTopLeftRadius: verticalScale(6), borderTopRightRadius: verticalScale(6) }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View>
                            <FlatList
                                horizontal
                                data={playerList}
                                style={{ width: scale(200), marginVertical: verticalScale(10) }}
                                renderItem={({ item }) => {
                                    return (
                                        <View>
                                            {
                                                item.isCaptain || item.isViceCaptain ? (
                                                    <View style={{ width: scale(80), alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Image source={{ uri: item.playerImg }} style={{ width: verticalScale(50), height: verticalScale(50), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                                                        <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(9), backgroundColor: colors.primary_blue, paddingHorizontal: scale(6), paddingVertical: verticalScale(2), borderRadius: verticalScale(20), marginTop: verticalScale(4) }}>{item.player_name.length > 10 ? item.player_name.split("")[0] + ". " + item.player_name.split(" ")[1] : item.player_name}</Text>
                                                    </View>
                                                ) : null
                                            }
                                        </View>
                                    )
                                }}
                            />
                        </View>


                        <View style={{ width: scale(50), marginTop: verticalScale(10), alignItems: 'center' }}>
                            <Text style={{ color: colors.greyColour, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14) }}>
                                IND</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16), marginTop: verticalScale(4) }}>
                                {team1count}</Text>
                        </View>
                        <View style={{ width: scale(50), marginTop: verticalScale(10), alignItems: 'center' }}>
                            <Text style={{ color: colors.greyColour, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(14) }}>
                                ENG</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16), marginTop: verticalScale(4) }}>
                                {team2count}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: scale(180), marginLeft: scale(10), justifyContent: 'space-between', marginTop: verticalScale(10) }}>

                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ color: colors.greyColour, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>
                                WK</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12), marginLeft: scale(4) }}>
                                {keeperCount}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ color: colors.greyColour, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>
                                BAT</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12), marginLeft: scale(4) }}>
                                {batsmanCount}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ color: colors.greyColour, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>
                                BOWL</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12), marginLeft: scale(4) }}>
                                {bowlerCount}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ color: colors.greyColour, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12) }}>
                                AR</Text>
                            <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(12), marginLeft: scale(4) }}>
                                {allRounderCount}</Text>
                        </View>

                    </View>
                </View>

                <View style={{ backgroundColor: colors.white, width: scale(330), height: verticalScale(30), marginTop: verticalScale(3), alignSelf: 'center', justifyContent: 'center', borderBottomLeftRadius: verticalScale(6), borderBottomRightRadius: verticalScale(6) }}>
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), marginLeft: scale(10) }}>MY Team 1</Text>
                </View>



            </View>
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.primary_blue, borderTopLeftRadius: verticalScale(20), borderTopRightRadius: verticalScale(20), height: verticalScale(100), width: scale(360), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly" }}>


                <TouchableOpacity onPress={() => props.navigation.navigate("Playerselection")} style={{ height: verticalScale(50), width: scale(320), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary_blue, borderRadius: verticalScale(6), borderWidth: 0, borderColor: colors.primary_blue }}>
                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }} >Create New Team</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
}

export default TeamsList;