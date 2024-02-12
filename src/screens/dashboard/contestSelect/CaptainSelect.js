import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, Alert } from 'react-native';
import { colors, fullWidth, scale, scaleFont, verticalScale, constants } from '../../../utils';
import CustomSlider from '../../../containers/Carousel/CustomSlider'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { carouseldataMovie, continuemovies, genredata, moviesdata, carouseldataSeries, seriesdata, recentseries, toppicksseries, continueseries, MoviesData, SeriesData, matchdata, Livematchdata, playersdata } from '../../../utils/Data';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CaptainSelect = (props) => {

    const [playerList, setplayerList] = useState(props.route.params.playerList)
    const bowlerCount = props.route.params.bowlerCount;
    const batsmanCount = props.route.params.batsmanCount;
    const allRounderCount = props.route.params.allRounderCount;
    const keeperCount = props.route.params.keeperCount
    const team1 = props.route.params.team1;
    const team2 = props.route.params.team2;
    const [captain, setCaptain] = useState({})
    const [viceCaptain, setViceCaptain] = useState({})
    const [captainSelected, setCaptainSelected] = useState(false)
    const [viceCaptainSelected, setViceCaptainSelected] = useState(false)

    const SelectCaptain = (item, index) => {

        let newdata = playerList
        for (let i = 0; i < playerList.length; i++) {
            newdata[i].isCaptain = false
        }
        setplayerList([...newdata])

        let data = playerList

        if (data[index].isViceCaptain) {
            data[index].isViceCaptain = !data[index].isViceCaptain
            setViceCaptainSelected(false)
        }
        data[index].isCaptain = !data[index].isCaptain
        setplayerList([...data])
        setCaptain(data[index])
        setCaptainSelected(true)
    }

    const SelectViceCaptain = (item, index) => {
        let newdata = playerList
        for (let i = 0; i < playerList.length; i++) {
            newdata[i].isViceCaptain = false
        }
        setplayerList([...newdata])
        let data = playerList

        if (data[index].isCaptain) {
            data[index].isCaptain = !data[index].isCaptain
            setCaptainSelected(false)
        }
        data[index].isViceCaptain = !data[index].isViceCaptain
        setplayerList([...data])
        setViceCaptain(data[index])
        setViceCaptainSelected(true)
    }


    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <View style={{ marginTop: verticalScale(40), flexDirection: 'row', paddingHorizontal: scale(20), alignItems: 'center', }}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ width: scale(124) }} >
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={verticalScale(26)}
                        color={colors.black}
                    />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', width: scale(180), }}>
                    <MaterialCommunityIcons
                        name="clock-alert-outline"
                        size={verticalScale(12)}
                        color={colors.primary_red}
                    />
                    <Text style={{ color: colors.black, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(10) }} > 02h 32m 12s</Text>
                </View>

            </View>


            <LinearGradient
                start={{ x: 1, y: 0.3 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{
                    width: scale(360),
                    height: verticalScale(80),
                    alignSelf: 'center',
                    justifyContent: 'center', alignItems: 'center'
                }}>
                <View style={{ paddingHorizontal: scale(20), alignItems: 'center', }}>
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(16), color: colors.white }} >Choose your captain and vice captain</Text>
                    <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', width: scale(260), marginTop: verticalScale(5) }}>
                        <View style={{ backgroundColor: colors.white, width: scale(30), height: verticalScale(25), borderRadius: verticalScale(50), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>C</Text>
                        </View>
                        <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), color: colors.white }} >Gets 2x Points</Text>
                        <View style={{ backgroundColor: colors.white, width: scale(30), height: verticalScale(25), borderRadius: verticalScale(50), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: colors.black, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM }}>VC</Text>
                        </View>
                        <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), color: colors.white }} >Gets 1.5x Points</Text>

                    </View>
                </View>
            </LinearGradient>
            <View style={{ flexDirection: 'row', backgroundColor: colors.white, elevation: 1, height: verticalScale(30), width: scale(360), alignSelf: 'center', }}>
                <View style={{ height: verticalScale(30), width: scale(206), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                        PLAYERS</Text>
                </View>
                <View style={{ height: verticalScale(30), alignItems: 'center', flexDirection: 'row', width: scale(154) }}>
                    <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                        POINTS</Text>


                </View>
            </View>


            <View style={{ flex: 1, marginBottom: verticalScale(100) }}>
                <FlatList
                    data={playerList}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', height: verticalScale(50), width: scale(360), paddingHorizontal: scale(20), }}>
                                <View style={{}}>
                                    <Image source={{ uri: item.playerImg }} style={{ width: scale(30), height: scale(30), borderRadius: verticalScale(100), resizeMode: "stretch" }} />
                                </View>
                                <View style={{ width: scale(160), paddingLeft: scale(15), }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>{item.player_name}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD }}>
                                            {item.team_name},</Text>
                                        <Text style={{ color: colors.black, fontSize: scaleFont(10), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(3) }}>
                                            {item.role}</Text>
                                    </View>
                                </View>

                                <View style={{ width: scale(60), height: verticalScale(30) }}>
                                    <Text style={{ color: colors.black, fontSize: scaleFont(12), fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, marginLeft: scale(4) }}>{item.fantasyPoints}</Text>
                                </View>

                                <TouchableOpacity onPress={() => SelectCaptain(item, index)} style={{ width: scale(40), height: verticalScale(30) }}>
                                    <View style={{ backgroundColor: item.isCaptain ? colors.black : colors.white, width: scale(30), height: verticalScale(24), borderRadius: verticalScale(50), borderWidth: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: item.isCaptain ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), }}>C</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => SelectViceCaptain(item, index)} style={{ width: scale(40), height: verticalScale(30) }}>
                                    <View style={{ backgroundColor: item.isViceCaptain ? colors.black : colors.white, width: scale(30), height: verticalScale(24), borderRadius: verticalScale(50), borderWidth: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: item.isViceCaptain ? colors.white : colors.black, fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(12), }}>VC</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />
            </View>


            {/* <View style={{ position: 'absolute', bottom: 0, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.primary_blue, borderTopLeftRadius: verticalScale(20), borderTopRightRadius: verticalScale(20), height: verticalScale(100), width: scale(360), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly" }}>

                <TouchableOpacity onPress={() => props.navigation.navigate("TeamPreview", { playerList: playerList, bowlerCount: bowlerCount, batsmanCount: batsmanCount, allRounderCount: allRounderCount, })} style={{ height: verticalScale(50), width: scale(160), borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: colors.primary_blue, backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                    <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }} >Team Preview</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("TeamsList", { playerList: playerList, bowlerCount: bowlerCount, batsmanCount: batsmanCount, allRounderCount: allRounderCount, keeperCount: keeperCount, team1: team1, team2: team2 })} style={{ height: verticalScale(50), width: scale(160), justifyContent: 'center', alignItems: 'center', backgroundColor: captainSelected && viceCaptainSelected ? colors.primary_blue : '#dee5ed', borderRadius: verticalScale(6), borderWidth: captainSelected && viceCaptainSelected ? 1 : 0, borderColor: colors.primary_blue }}>
                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }} >Save Team</Text>
                </TouchableOpacity>


            </View> */}


            <View style={{ position: 'absolute', bottom: 0, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.primary_blue, borderTopLeftRadius: verticalScale(20), borderTopRightRadius: verticalScale(20), height: verticalScale(100), width: scale(360), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly" }}>

                <TouchableOpacity onPress={() => props.navigation.navigate("TeamPreview", { playerList: playerList, bowlerCount: bowlerCount, batsmanCount: batsmanCount, allRounderCount: allRounderCount, })} style={{ height: verticalScale(50), width: scale(160), borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: colors.primary_blue, backgroundColor: colors.white, borderRadius: verticalScale(6) }}>
                    <Text style={{ color: colors.primary_blue, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }} >Team Preview</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("TeamsList", { playerList: playerList, bowlerCount: bowlerCount, batsmanCount: batsmanCount, allRounderCount: allRounderCount, keeperCount: keeperCount, team1: team1, team2: team2 })} style={{ height: verticalScale(50), width: scale(160), justifyContent: 'center', alignItems: 'center', backgroundColor: captainSelected && viceCaptainSelected ? colors.primary_blue : '#dee5ed', borderRadius: verticalScale(6), borderWidth: captainSelected && viceCaptainSelected ? 1 : 0, borderColor: colors.primary_blue }}>
                    <Text style={{ color: colors.white, fontFamily: constants.OPENSANS_FONT_MEDIUM, fontSize: scaleFont(14) }} >Save Team</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

export default CaptainSelect;